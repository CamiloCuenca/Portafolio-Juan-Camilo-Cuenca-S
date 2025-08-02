import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";
import React from "react";

export default function Footer() {
  const { copied, handleCopyEmail } = useCopyEmail();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Información de autor */}
          <div className="text-center md:text-left">
            <p className="text-body font-medium">
              © {new Date().getFullYear()} Juan Camilo Cuenca
            </p>
            <p className="text-body-small text-gray-400 mt-1">
              Desarrollador Full Stack Móvil
            </p>
          </div>

          {/* Enlaces sociales */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/CamiloCuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <FiGithub className="text-lg" />
              </div>
              <span className="font-medium text-body">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <FiLinkedin className="text-lg" />
              </div>
              <span className="font-medium text-body">LinkedIn</span>
            </a>

            {/* Correo electrónico */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <div className="p-2 bg-white/10 rounded-lg">
                <FiMail className="text-lg" />
              </div>
              <span className="text-body-small md:text-body font-medium select-all">
                camilocuencadev@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="group p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                title="Copiar correo"
              >
                <FiCopy className="text-lg group-hover:text-blue-400 transition-colors duration-300" />
              </button>
              {copied && (
                <span className="text-green-400 text-body-small font-medium animate-pulse">
                  ¡Copiado!
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-8"></div>
        
        {/* Información adicional */}
        <div className="text-center mt-6">
          <p className="text-body-small text-gray-400">
            Construido con React, Tailwind CSS y mucho ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
