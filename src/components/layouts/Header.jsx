import React, { useState } from "react";
import { MenuIcon, CloseIcon } from "../common/SvgIcons";
import ButtonDownload from "../common/ButtonDownload";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary backdrop-blur-sm border-b border-primary/20 p-4 text-white relative z-50 shadow-lg">
    
    <div className="max-w-screen-xl mx-auto">
    
      <nav className="flex justify-between items-center w-full px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-10 w-auto sm:h-8 lg:h-12 transition-transform duration-300 hover:scale-105"
            src="/assets/Logo.svg"
            alt="Logo"
          />
        </div>

        {/* Menú hamburguesa */}
        <button
          className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Navegación */}
        <ul
          className={`
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
            lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto
            lg:flex lg:items-center lg:space-x-8
            absolute lg:static top-full left-0 w-full lg:w-auto 
            bg-primary/95 backdrop-blur-sm lg:bg-transparent 
            px-6 lg:px-0 py-4 lg:py-0
            font-semibold text-body-large 
            transition-all duration-500 ease-in-out z-50
            border-t border-white/10 lg:border-t-0
            shadow-lg lg:shadow-none
          `}
        >
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:bg-tertiary transition-all duration-300 block py-3 lg:py-2 px-3 lg:px-2 rounded-lg"
            >
              Acerca de mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:bg-tertiary transition-all duration-300 block py-3 lg:py-2 px-3 lg:px-2 rounded-lg"
            >
              Mis Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:bg-tertiary transition-all duration-300 block py-3 lg:py-2 px-3 lg:px-2 rounded-lg"
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
              className="hover:bg-tertiary transition-all duration-300 block py-3 lg:py-2 px-3 lg:px-2 rounded-lg cursor-pointer"
            >
              Educación y Experiencia
            </a>
          </li>
          {/* Botón CV móvil */}
          <li className="block lg:hidden mt-6 mb-2">
            <ButtonDownload
              href={"/Hv-Juan-Camilo-Cuenca-Sepulveda-1004779025.pdf"}
              Name={"Visualizar CV"}
            />
          </li>
        </ul>

        {/* Botón CV escritorio */}
        <div className="hidden lg:flex">
          <ButtonDownload
            href={"/Hv-Juan-Camilo-Cuenca-Sepulveda-1004779025.pdf"}
            Name={"Visualizar CV"}
          />
        </div>
      </nav>
    </div>
    </header>
  );
}
