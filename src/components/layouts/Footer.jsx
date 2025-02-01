import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("camilocuencadev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Restablecer estado después de 2s
  };

  return (
    <footer className="bg-purple-dark text-white text-lg py-6 ">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-2">© {new Date().getFullYear()} Juan Camilo Cuenca</p>
        <div className="flex space-x-6 items-center">
          <a
            href="https://github.com/CamiloCuenca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-400 text-xl"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-400 text-xl"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <div className="flex items-center space-x-2">
            <FiMail />
            <span>camilocuencadev@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              className="text-white hover:text-gray-400"
              title="Copiar correo"
            >
              <FiCopy />
            </button>
            {copied && <span className="text-green-400 text-sm">¡Copiado!</span>}
          </div>
        </div>
      </div>
    </footer>
  );
}
