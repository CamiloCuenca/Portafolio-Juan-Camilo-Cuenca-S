import React from "react";
import ButtonDownload from "../common/ButtonDownload";
import HeroText from "../common/HeroText";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 py-12 px-4 md:py-20 lg:py-28 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
        {/* Imagen de perfil */}
        <div className="relative group">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-full p-1 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-400 rounded-full p-1">
              <div className="w-full h-full bg-blue-900 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                  src="/assets/FotoPerfil.png"
                  alt="Juan Camilo Cuenca Sepúlveda"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="relative">
            <div className="relative z-10 px-4 sm:px-8 md:px-6 lg:px-0">
              <HeroText 
                width="w-full max-w-2xl"
                height="h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Desarrollador Full Stack Móvil apasionado por crear soluciones innovadoras y experiencias digitales excepcionales
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Ver Proyectos
              </button>
              
              <ButtonDownload
                href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}
                Name={"Visualizar CV"}
                color={"bg-gradient-to-r from-blue-500 to-blue-400"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
