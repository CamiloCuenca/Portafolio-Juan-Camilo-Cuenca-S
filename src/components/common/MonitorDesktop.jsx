import React from "react";

export default function MonitorDesktop({ url }) {
  // Tamaño visual del monitor (lo que se ve en pantalla)
  const displayWidth = 800;
  const displayHeight = 500;
  
  // Resolución real del iframe (para mostrar el contenido completo)
  const iframeWidth = 1920;
  const iframeHeight = 1080;
  
  // Calcular escala para ajustar el iframe al display
  const scale = Math.min(displayWidth / iframeWidth, displayHeight / iframeHeight);

  return (
    <div className="w-full flex justify-center py-10">
      <div className="relative">
        {/* Monitor Frame */}
        <div className="relative rounded-t-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-4 shadow-2xl shadow-blue-900/30 border border-white/10">
          {/* Webcam */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-2 w-2 rounded-full bg-slate-700 border border-white/20" aria-hidden="true" />
          
          {/* Screen Container */}
          <div 
            className="relative overflow-hidden rounded-lg bg-black border border-white/10" 
            style={{ width: displayWidth, height: displayHeight }}
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
          <div className="w-32 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl border-x border-b border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b" />
          </div>
        </div>
        
        {/* Monitor Base */}
        <div className="flex justify-center -mt-1">
          <div className="w-48 h-3 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-full shadow-lg border border-white/10" />
        </div>
      </div>
    </div>
  );
}
