import React from "react";
import ButtonDownload from "../common/ButtonDownload";

export default function HeroSection() {
  return (
    <div className="bg-tertiary py-8 px-4 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Imagen de perfil - Más grande con fondo azul claro */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-secondary rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-full"
            src="/assets/FotoPerfil.png"
            alt="Juan Camilo Cuenca Sepúlveda"
          />
        </div>

        {/* Contenido principal con llaves */}
        <div className="flex-1 text-center md:text-left">
          <div className="relative mb-8">
           
            
            {/* Texto centrado */}
            <div className="relative z-15 px-8 sm:px-12 md:px-10 lg:px-2 py-8">
             <img src="/assets/HeroSection.svg" alt="Juan Camilo Cuenca Sepúlveda" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Descripción y botones */}
          <div className="space-y-4">
            <p  className="text-base sm:text-lg text-gray-300 max-w-2xl">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras y experiencias digitales excepcionales
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Ver Proyectos
              </button>
              <ButtonDownload
                href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}
                Name={"Visualizar CV"}
                color={"bg-gradient-to-r from-primary to-secondary"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
