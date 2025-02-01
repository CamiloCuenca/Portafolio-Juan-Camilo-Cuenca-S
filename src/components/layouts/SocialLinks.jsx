import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";

export default function SocialLinks() {
  const { copied, handleCopyEmail } = useCopyEmail();

  return (
    <div className="bg-purple-dark text-white text-lg  mx-auto flex flex-col items-start ">
      <div className="flex space-x-6 items-center ml-5">
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
  );
}
