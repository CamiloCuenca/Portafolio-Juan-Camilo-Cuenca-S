import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiCopy } from "react-icons/fi";
import { useCopyEmail } from "../../hooks/useCopyEmail";
import ButtonDownload from "../common/ButtonDownload";

export default function AboutMe() {
  const { copied, handleCopyEmail } = useCopyEmail();
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-heading-2 mb-4 text-gray-800">Acerca de mí</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-8">
        {/* Información principal */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <p className="text-body-large leading-relaxed text-gray-700 space-y-4">
            <strong className="text-blue-600">¡Hola!</strong> Soy Juan Camilo Cuenca Sepúlveda, estudiante de <strong className="text-blue-600">Ingeniería en Sistemas y Computación</strong> en la <strong className="text-blue-600">Universidad del Quindío</strong>, con un enfoque en el desarrollo de aplicaciones móviles y tecnologías web modernas. Tengo experiencia trabajando con <strong className="text-blue-600">Java</strong>, <strong className="text-blue-600">Spring Boot</strong>, <strong className="text-blue-600">React</strong>, <strong className="text-blue-600">React Native</strong> entre otros, lo que me ha permitido crear aplicaciones eficientes y escalables.
            <br />
            <br />
            A través del programa <strong className="text-blue-600">MisionTic 2022</strong>, he podido fortalecer mis habilidades técnicas y aprender a trabajar de manera ágil y efectiva en proyectos colaborativos. Estoy siempre en busca de nuevos desafíos para seguir creciendo profesionalmente.
          </p>
        </div>

        {/* Redes sociales y contacto */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <h2 className="text-heading-4 mb-8 text-gray-800 text-center">
            Mis Redes y Contacto
          </h2>

          {/* Enlaces sociales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://github.com/CamiloCuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FiGithub size={24} className="group-hover:animate-pulse" />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FiLinkedin size={24} className="group-hover:animate-pulse" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Correo electrónico */}
          <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 bg-gray-50">
            <FiMail size={20} className="text-blue-500" />
            <span className="text-body font-medium select-all">camilocuencadev@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"
              title="Copiar correo"
            >
              <FiCopy size={18} className="text-blue-500" />
            </button>
            {copied && (
              <span className="text-green-500 text-body-small font-medium animate-pulse">
                ¡Copiado!
              </span>
            )}
          </div>

          {/* Botón Descargar CV */}
          <div className="flex justify-center mt-8">
            <ButtonDownload
              color="bg-gradient-to-r from-blue-500 to-blue-400"
              href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}
              Name={"Visualizar CV"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
