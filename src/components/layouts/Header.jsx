import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonDownload from "../common/ButtonDownload";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary p-4 text-white relative z-50">
      <nav className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-10 w-auto sm:h-8 lg:h-12"
            src="/assets/Logo.svg"
            alt="Logo"
          />
        </div>

        {/* Menú hamburguesa */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* Lista de navegación */}
        <ul
          className={`
            ${isOpen ? "block" : "hidden"}
            lg:flex lg:items-center lg:space-x-8
            absolute lg:static top-16 left-0 w-full lg:w-auto bg-primary lg:bg-transparent px-4 lg:px-0
            font-bold text-body-large transition-all duration-300 z-50
          `}
        >
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-secondary transition duration-300 block py-2"
            >
              Acerca de mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-secondary transition duration-300 block py-2"
            >
              Mis Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-secondary transition duration-300 block py-2"
            >
              Mis proyectos
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("education")
                  ?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 1000);
                setIsOpen(false);
              }}
              className="hover:text-secondary transition duration-300 block py-2 cursor-pointer"
            >
              Educación y Experiencia
            </a>
          </li>
          {/* Botón de descarga SOLO en móvil */}
          <li className="block lg:hidden mt-4 mb-4">
            {/* 👇 Agregamos mb-4 para separar del borde */}
            <ButtonDownload
              href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}
              Name={"Visualizar CV"}
            />
          </li>
        </ul>

        {/* Botón de descarga SOLO en escritorio */}
        <div className="hidden lg:flex">
          <ButtonDownload
            href={"/HV Juan Camilo Cuenca Sepúlveda.pdf"}
            Name={"Visualizar CV"}
          />
        </div>
      </nav>
    </header>
  );
}
