import React from "react";
import { useEffect, useState } from "react";

export default function MonitorDesktop({ url }) {
  const [dimensions, setDimensions] = useState({
    displayWidth: 800,
    displayHeight: 500
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Móviles pequeños
        setDimensions({ displayWidth: 280, displayHeight: 175 });
      } else if (width < 1024) {
        // Tablets
        setDimensions({ displayWidth: 500, displayHeight: 312 });
      } else {
        // Desktop
        setDimensions({ displayWidth: 800, displayHeight: 500 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Resolución real del iframe (para mostrar el contenido completo)
  const iframeWidth = 1920;
  const iframeHeight = 1080;
  
  // Calcular escala para ajustar el iframe al display
  const scale = Math.min(dimensions.displayWidth / iframeWidth, dimensions.displayHeight / iframeHeight);

  return (
    <div className="w-full flex justify-center py-4 sm:py-6 lg:py-10">
      <div className="relative">
        {/* Monitor Frame */}
        <div className="relative rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-2 sm:p-3 lg:p-4 shadow-2xl shadow-blue-900/30 border border-white/10">
          {/* Webcam */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1 sm:top-1.5 lg:top-2 h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-slate-700 border border-white/20" aria-hidden="true" />
          
          {/* Screen Container */}
          <div 
            className="relative overflow-hidden rounded-md sm:rounded-lg bg-black border border-white/10" 
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
                title="Dental Management System"
                src={url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="flex justify-center">
          <div className="w-20 sm:w-28 lg:w-32 h-10 sm:h-12 lg:h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg sm:rounded-b-xl border-x border-b border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b" />
          </div>
        </div>
        
        {/* Monitor Base */}
        <div className="flex justify-center -mt-1">
          <div className="w-32 sm:w-40 lg:w-48 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-full shadow-lg border border-white/10" />
        </div>
      </div>
    </div>
  );
}
