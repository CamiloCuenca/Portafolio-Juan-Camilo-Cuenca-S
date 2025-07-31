import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";
import ButtonDownload from "../common/ButtonDownload";

export default function AboutMe() {
  const { copied, handleCopyEmail } = useCopyEmail();
  return (
    <div id="about" className="max-w-3xl mx-auto p-6 ">
      <h1 className="text-2xl font-semibold mb-4 ">Acerca de mí</h1>
      <p className="bg-white p-6 rounded-lg shadow-2xl text-base sm:text-lg leading-relaxed text-gray-700 space-y-4">
        <strong>¡Hola!</strong> Soy Juan Camilo Cuenca Sepúlveda, estudiante de <strong>Ingeniería en Sistemas y Computación</strong> en la <strong>Universidad del Quindío</strong>, con un enfoque en el desarrollo de aplicaciones móviles y tecnologías web modernas. Tengo experiencia trabajando con <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, <strong>React Native</strong> entre otros, lo que me ha permitido crear aplicaciones eficientes y escalables.
        <br />
        <br />
        A través del programa <strong>MisionTic 2022</strong>, he podido fortalecer mis habilidades técnicas y aprender a trabajar de manera ágil y efectiva en proyectos colaborativos. Estoy siempre en busca de nuevos desafíos para seguir creciendo profesionalmente.
      </p>
      <div className="bg-white p-6 rounded-lg mt-4 shadow-2xl text-base sm:text-lg leading-relaxed text-gray-700 space-y-4">
        <h2 className="text-lg font-semibold mb-6 text-quaternary text-center">
          Mis Redes y Contacto
        </h2>

        {/* Fila: GitHub + LinkedIn */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/CamiloCuenca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-quaternary text-quaternary hover:bg-quaternary hover:text-white transition"
          >
            <FiGithub size={24} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-quaternary text-quaternary hover:bg-quaternary hover:text-white transition"
          >
            <FiLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Correo */}
        <div className="flex items-center gap-2 justify-center mt-4 px-4 py-2 rounded-full border-2 border-quaternary text-quaternary">
          <FiMail size={20} />
          <span className="text-sm select-all">camilocuencadev@gmail.com</span>
          <button
            onClick={handleCopyEmail}
            className="hover:text-primary transition"
            title="Copiar correo"
          >
            <FiCopy size={18} />
          </button>
          {copied && (
            <span className="text-green-500 text-xs ml-2">¡Copiado!</span>
          )}
        </div>

        {/* Botón Descargar CV */}
        <div className="flex justify-center mt-6">
          <ButtonDownload
            color="bg-primary"
            href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}
            Name={"Visualizar CV"}
          />
        </div>
      </div>



    </div>
  );
}
