import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";
import React from "react";

export default function SocialLinks() {
  const { copied, handleCopyEmail } = useCopyEmail();

  return (
    <div className="bg-gradient-to-r from-quaternary to-quaternary/90 text-white py-6 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
          {/* Enlaces sociales con mejor diseño */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* GitHub */}
            <a
              href="https://github.com/CamiloCuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <FiGithub className="text-xl" />
              </div>
              <span className="font-medium text-heading-3">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                <FiLinkedin className="text-xl" />
              </div>
              <span className="font-medium text-heading-3">LinkedIn</span>
            </a>
          </div>

          {/* Email con mejor diseño */}
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <div className="p-2 bg-white/10 rounded-lg">
              <FiMail className="text-xl" />
            </div>
            <span className="font-medium text-body-small md:text-body">camilocuencadev@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              className="group p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
              title="Copiar correo"
            >
              <FiCopy className="text-lg group-hover:text-secondary transition-colors duration-300" />
            </button>
            {copied && (
              <span className="text-green-400 text-body-small ml-2 font-medium animate-pulse">
                ¡Copiado!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
