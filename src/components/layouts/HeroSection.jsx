import React from "react";
import ButtonDownload from "../common/ButtonDownload";
import HeroText from "../common/HeroText";
import PixelBlast from "../common/PixelBlast";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-slate-950">
      
      {/* 🔵 PIXEL BLAST - FONDO TOTAL */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          pixelSize={8}
          color="#b19eef"
          patternScale={2.6}
          patternDensity={1.4}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
          className="w-full h-full"
        />
      </div>

      {/* ✨ CAPAS DE GRADIENTES Y EFECTOS */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-950/90 via-blue-900/80 to-slate-900/90 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-500/5 via-purple-400/5 to-blue-400/5 pointer-events-none" />
      <div className="absolute -top-12 -left-8 z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-10 z-10 h-[26rem] w-[26rem] rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(102,126,234,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.05),transparent_25%)] pointer-events-none" />

      {/* 🚀 CONTENIDO */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-24 md:flex-row md:gap-16 lg:gap-20">
        
        {/* Imagen */}
        <div className="relative group drop-shadow-2xl">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-full p-1 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-400 rounded-full p-1">
              <div className="w-full h-full bg-blue-900 rounded-full overflow-hidden">
                <img
                  src="/assets/FotoPerfil.png"
                  alt="Juan Camilo Cuenca Sepúlveda"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <HeroText width="w-full max-w-2xl" height="h-full" />

          <p className="text-lg sm:text-xl text-gray-100/90 max-w-2xl leading-relaxed">
            Desarrollador Full Stack Móvil que mezcla ingeniería y diseño para crear experiencias digitales memorables y productos listos para producción.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-900/50 transition-all hover:scale-105"
            >
              Ver Proyectos
            </button>

            <ButtonDownload
              href="/HV Juan Camilo Cuenca Sepúlveda.pdf"
              Name="Visualizar CV"
              color="bg-white/10 border border-white/20 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
