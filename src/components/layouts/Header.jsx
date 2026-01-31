import React, { useState } from "react";
import { MenuIcon, CloseIcon } from "../common/SvgIcons";
import ButtonDownload from "../common/ButtonDownload";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header
          className="
        sticky top-0 w-full z-50
        bg-primary backdrop-blur-md
        border-b border-white/10
        text-white
      "
      >
        <div className="max-w-screen-xl mx-auto">
          <nav className="flex justify-between items-center w-full px-6 py-3">

            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                  src="/assets/Logo.svg"
                  alt="Logo"
                  className="
                h-9 sm:h-8 lg:h-11 w-auto
                transition-all duration-300
                hover:scale-105
                hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
              "
              />
            </div>

            {/* Menú hamburguesa */}
            <button
                className="
              lg:hidden p-2 rounded-lg
              hover:bg-white/10
              transition-all duration-300
            "
                onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Navegación */}
            <ul
                className={`
              ${isOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              origin-top
              lg:opacity-100 lg:scale-100 lg:pointer-events-auto
              lg:flex lg:items-center lg:space-x-12
              absolute lg:static top-full left-0 w-full lg:w-auto
               
              px-6 lg:px-0 py-4 lg:py-0
              font-semibold text-body-large
              transition-all duration-300 ease-out
              border-t border-white/10 lg:border-t-0
              shadow-lg lg:shadow-none
            `}
            >
              {[
                { href: "#about", label: "Acerca de mí" },
                { href: "#skills", label: "Mis Skills" },
                { href: "#projects", label: "Mis proyectos" },
              ].map((item) => (
                  <li key={item.href}>
                    <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="
                    relative block
                    py-3 px-3
                    lg:py-0 lg:px-0
                    rounded-lg lg:rounded-none

                    hover:text-tertiary
                    transition-all duration-300

                    hover:bg-white/10 lg:hover:bg-transparent

                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-secondary
                    after:transition-all after:duration-300
                    lg:hover:after:w-full
                  "
                    >
                      {item.label}
                    </a>
                  </li>
              ))}

              {/* Educación y Experiencia */}
              <li>
                <a
                    onClick={(e) => {
                      e.preventDefault();
                      document
                          .getElementById("education")
                          ?.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => {
                        document
                            .getElementById("experience")
                            ?.scrollIntoView({ behavior: "smooth" });
                      }, 900);
                      setIsOpen(false);
                    }}
                    className="
                  relative block cursor-pointer
                  py-3 px-3
                  lg:py-0 lg:px-0
                  rounded-lg lg:rounded-none

                 hover:text-tertiary
                  transition-all duration-300

                  hover:bg-white/10 lg:hover:bg-transparent

                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-secondary
                  after:transition-all after:duration-300
                  lg:hover:after:w-full
                "
                >
                  Educación y Experiencia
                </a>
              </li>

              {/* Botón CV móvil */}
              <li className="block lg:hidden mt-6">
                <ButtonDownload
                    href="/Hv-Juan-Camilo-Cuenca-Sepulveda-1004779025.pdf"
                    Name="Visualizar CV"
                    className="
                  w-full
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                "
                />
              </li>
            </ul>

            {/* Botón CV escritorio */}
            <div className="hidden lg:flex">
              <ButtonDownload
                  href="/Hv-Juan-Camilo-Cuenca-Sepulveda-1004779025.pdf"
                  Name="Visualizar CV"
                  className="
                shadow-md hover:shadow-xl
                hover:scale-[1.03]
                transition-all duration-300
              "
              />
            </div>
          </nav>
        </div>
      </header>
  );
}
