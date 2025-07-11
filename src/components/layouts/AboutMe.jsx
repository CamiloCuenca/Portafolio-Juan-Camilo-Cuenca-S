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
            <div className="bg-white p-6 mt-3 rounded-lg shadow-2xl">
                <h2 className="text-lg font-semibold mb-4 text-quaternary">Mis Redes y Contacto</h2>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {/* GitHub */}
                    <a
                        href="https://github.com/CamiloCuenca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-quaternary text-white hover:bg-primary transition-colors"
                    >
                        <FiGithub />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/juan-camilo-cuenca-sepulveda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-quaternary text-white hover:bg-primary transition-colors"
                    >
                        <FiLinkedin />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    {/* Email */}
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-quaternary text-white">
                        <FiMail />
                        <span className="text-sm md:text-base select-all">camilocuencadev@gmail.com</span>
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
                    {/* Descargar CV */}
                     {/* Botón de descarga SOLO visible en escritorio */}
                        <div className="hidden lg:flex">
                                       <ButtonDownload color="bg-primary" href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}   Name={"Visualizar CV"} />
                        </div>
                </div>
            </div>
        </div>
    );
}
