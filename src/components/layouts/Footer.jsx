import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";
import React from "react";


export default function Footer() {
  const { copied, handleCopyEmail } = useCopyEmail();

  return (
    <footer className="bg-quaternary text-white text-body py-6 w-full">
      <div className="container mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0 px-4">
        {/* Derechos de autor */}
        <p className="text-center sm:text-left text-caption sm:text-body w-full sm:w-auto mb-2 sm:mb-0">
          © {new Date().getFullYear()} Juan Camilo Cuenca
        </p>

        {/* Links e información */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
          {/* GitHub */}
          <a
            href="https://github.com/CamiloCuenca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 text-body sm:text-body-large px-2 py-1 rounded transition-colors"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 text-body sm:text-body-large px-2 py-1 rounded transition-colors"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* Correo electrónico */}
          <div className="flex items-center gap-2 bg-white/10 rounded px-2 py-1">
            <FiMail />
            <span className="text-caption sm:text-body break-all">
              camilocuencadev@gmail.com
            </span>
            <button
              onClick={handleCopyEmail}
              className="hover:text-gray-400 focus:outline-none px-1"
              title="Copiar correo"
            >
              <FiCopy />
            </button>
            {copied && (
              <span className="text-green-400 text-caption ml-1">¡Copiado!</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
