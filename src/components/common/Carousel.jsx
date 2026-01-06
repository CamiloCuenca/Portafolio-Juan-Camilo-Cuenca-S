import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed
import { FiCircle, FiCode, FiBox , FiLayers, FiLayout } from 'react-icons/fi';

const DEFAULT_ITEMS = [
  {
    title: '⏲️ Timer Pomodoro Inteligente',
    description: 'Sesiones de trabajo configurable (por defecto 25 minutos). Descansos cortos personalizables (por defecto 5 minutos). Descansos largos personalizables (por defecto 15 minutos). Pausar/Reanudar y reiniciar sesiones. Intercambio rápido entre sesiones de trabajo y descanso.',
    id: 1,
    icon: <FiBox className="h-[16px] w-[16px] text-white" />
  },
  {
    title: '🎨 Temas Dinámicos',
    description: 'Elige entre 5 temas hermosos que transforman toda la interfaz: 🟢 Verde (fresco y natural), 🔵 Azul (calmo y profesional), 🟣 Púrpura (creativo y moderno), 🟠 Naranja (energético y motivador), 🔴 Rojo (intenso y llamativo). Cambiar tema afecta toda la app en tiempo real.',
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />
  },
  {
    title: '📊 Estadísticas Detalladas',
    description: 'Racha semanal visual (lunes a domingo). Indicador de sesiones completadas con imagen de pomodoro. Gráficos de líneas para sesiones de trabajo y descanso. Seguimiento semanal de tu productividad.',
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />
  },
  {
    title: '⚙️ Configuración Completa',
    description: 'Ajusta duraciones de sesiones de trabajo, descansos cortos y largos. Selector de temas personalizado. Configuración guardada automáticamente para tu comodidad.',
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`relative shrink-0 flex flex-col group ${
        round
          ? 'items-center justify-center text-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 border-0'
          : 'items-start justify-between bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 border border-blue-500/20 rounded-[20px] hover:border-blue-400/40'
      } overflow-hidden cursor-grab active:cursor-grabbing shadow-xl hover:shadow-2xl transition-all duration-300`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
      whileHover={{ scale: 1.02 }}
    >
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className={`${round ? 'p-0 m-0' : 'mb-4 p-6'}`}>
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </span>
      </div>
      <div className="p-6 pt-0">
        <div className="mb-3 font-bold text-xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">{item.title}</div>
        <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-5 backdrop-blur-sm ${
        round ? 'rounded-full border border-white/30 bg-white/5' : 'rounded-[28px] border border-blue-200/30 bg-white/5 shadow-2xl'
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-6 flex gap-3">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? 'h-2.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50'
                  : 'h-2.5 w-2.5 bg-gray-400/50 hover:bg-gray-400/80'
              }`}
              animate={{
                scale: activeIndex === index ? 1.05 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
