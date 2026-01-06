import React from "react";

export default function MovilDesktop({url}) {
  // Tamaño visual del móvil (lo que se ve en pantalla) - más pequeño
  const displayWidth = 300;
  const displayHeight = 650;
  
  // Resolución real del iframe (para mostrar el contenido completo)
  const iframeWidth = 412;
  const iframeHeight = 915;
  
  // Calcular escala para ajustar el iframe al display
  const scale = Math.min(displayWidth / iframeWidth, displayHeight / iframeHeight);
 
  return (
    <div className="w-full flex justify-center ">
      <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-900 to-black p-3 shadow-2xl shadow-blue-900/40 border border-white/10">
        <div className="absolute inset-x-12 top-2 h-1.5 rounded-full bg-white/30" aria-hidden="true" />
        <div className="absolute left-1/2 -translate-x-1/2 top-4 h-5 w-20 rounded-full bg-black/60 border border-white/10" aria-hidden="true" />
        <div 
          className="relative overflow-hidden rounded-[1.5rem] bg-black border border-white/10" 
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
              title="Pomo Timer Flow"
              src={url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-x-14 bottom-3 h-1 rounded-full bg-white/20" aria-hidden="true" />
      </div>
    </div>
  );
}
