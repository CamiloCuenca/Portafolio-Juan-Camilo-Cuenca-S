import React from "react";
import { useEffect, useState } from "react";

export default function MovilDesktop({url}) {
  const [dimensions, setDimensions] = useState({
    displayWidth: 300,
    displayHeight: 650
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLoadVisualization = () => {
    setIsLoading(true);
    setIsLoaded(true);
  };
  
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
          className="relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] bg-black border border-white/10 flex items-center justify-center" 
          style={{ width: dimensions.displayWidth, height: dimensions.displayHeight }}
        >
          {!isLoaded ? (
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <button
                onClick={handleLoadVisualization}
                disabled={isLoading}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg text-xs sm:text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? 'Cargando...' : 'Ver visualización'}
              </button>
            </div>
          ) : (
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
                onLoad={() => setIsLoading(false)}
              />
            </div>
          )}
        </div>
        <div className="absolute inset-x-10 sm:inset-x-14 bottom-2 sm:bottom-3 h-0.5 sm:h-1 rounded-full bg-white/20" aria-hidden="true" />
      </div>
    </div>
  );
}
