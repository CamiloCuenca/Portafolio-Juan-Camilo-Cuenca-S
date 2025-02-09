import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";

export default function SocialLinks() {
  const { copied, handleCopyEmail } = useCopyEmail();

  return (
    <div className="bg-purple-dark text-white text-lg p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/CamiloCuenca"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 text-xl"
        >
          <FiGithub />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 text-xl"
        >
          <FiLinkedin />
          <span>LinkedIn</span>
        </a>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <FiMail />
          <span className="text-sm md:text-base">camilocuencadev@gmail.com</span>
          <button
            onClick={handleCopyEmail}
            className="hover:text-gray-400"
            title="Copiar correo"
          >
            <FiCopy />
          </button>
          {copied && (
            <span className="text-green-400 text-sm ml-2">¡Copiado!</span>
          )}
        </div>
      </div>
    </div>
  );
}
