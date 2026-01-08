import React from "react";
import { useEffect, useState } from "react";

export default function MovilDesktop({url}) {
  const [dimensions, setDimensions] = useState({
    displayWidth: 300,
    displayHeight: 650
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Móviles pequeños
        setDimensions({ displayWidth: 200, displayHeight: 433 });
      } else if (width < 1024) {
        // Tablets
        setDimensions({ displayWidth: 250, displayHeight: 541 });
      } else {
        // Desktop
        setDimensions({ displayWidth: 300, displayHeight: 650 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Resolución real del iframe (para mostrar el contenido completo)
  const iframeWidth = 412;
  const iframeHeight = 915;
  
  // Calcular escala para ajustar el iframe al display
  const scale = Math.min(dimensions.displayWidth / iframeWidth, dimensions.displayHeight / iframeHeight);
 
  return (
    <div className="w-full flex justify-center">
      <div className="relative rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-900 to-black p-2 sm:p-3 shadow-2xl shadow-blue-900/40 border border-white/10">
        <div className="absolute inset-x-8 sm:inset-x-12 top-1.5 sm:top-2 h-1 sm:h-1.5 rounded-full bg-white/30" aria-hidden="true" />
        <div className="absolute left-1/2 -translate-x-1/2 top-3 sm:top-4 h-4 sm:h-5 w-16 sm:w-20 rounded-full bg-black/60 border border-white/10" aria-hidden="true" />
        <div 
          className="relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] bg-black border border-white/10" 
          style={{ width: dimensions.displayWidth, height: dimensions.displayHeight }}
        >
          {/* Iframe escalado */}
          <div
            style={{
              width: iframeWidth,
              height: iframeHeight,
              transform: `scale(${scale})`,
              transformOrigin: 'top left'
            }}
          >
            <iframe
              title="Pomo Timer Flow"
              src={url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-x-10 sm:inset-x-14 bottom-2 sm:bottom-3 h-0.5 sm:h-1 rounded-full bg-white/20" aria-hidden="true" />
      </div>
    </div>
  );
}
