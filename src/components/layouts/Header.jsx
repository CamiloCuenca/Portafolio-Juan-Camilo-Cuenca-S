// src/components/layouts/Header.jsx
import React, { useState } from "react";
import { MenuIcon, CloseIcon } from "../common/SvgIcons";
import ButtonDownload from "../common/ButtonDownload";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const menuItems = [
    { href: "#about", key: "about" },
    { href: "#skills", key: "skills" },
    { href: "#projects", key: "projects" },
  ];

  return (
    <header
      className={
        `sticky top-0 w-full z-50
        bg-primary/95 lg:bg-primary/95 lg:backdrop-blur-md
        border-b border-white/10
        text-white`
      }
    >
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex justify-between items-center w-full px-6 py-3">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/Logo.svg"
              alt={t('logo_alt')}
              className="
                h-9 sm:h-8 lg:h-11 w-auto
                transition-all duration-300
                hover:scale-105
                hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
              "
            />
          </div>

          {/* Menú hamburguesa */}
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2 mr-2">
              <button
                onClick={() => setLocale('es')}
                className={`px-2 py-1 rounded-md ${locale === 'es' ? 'bg-white/20' : 'bg-transparent'}`}
                aria-label="Cambiar a Español"
              >
                {t('lang_es')}
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 rounded-md ${locale === 'en' ? 'bg-white/20' : 'bg-transparent'}`}
                aria-label="Change to English"
              >
                {t('lang_en')}
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Navegación */}
          <ul
            className={`
              ${isOpen ? "opacity-100 scale-100 bg-primary/95 backdrop-blur-md" : "opacity-0 scale-95 pointer-events-none bg-transparent"}
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
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="relative block py-3 px-3 lg:py-0 lg:px-0 rounded-lg lg:rounded-none hover:text-tertiary transition-all duration-300 hover:bg-white/10 lg:hover:bg-transparent"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}

            {/* Educación y Experiencia */}
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => {
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                  }, 900);
                  setIsOpen(false);
                }}
                className="relative block cursor-pointer py-3 px-3 lg:py-0 lg:px-0 rounded-lg lg:rounded-none hover:text-tertiary transition-all duration-300 hover:bg-white/10 lg:hover:bg-transparent"
              >
                {t('education_experience')}
              </a>
            </li>

            {/* Botón CV móvil */}
            <li className="block lg:hidden mt-6">
              <ButtonDownload
                href="/Hv-Juan-Camilo-Cuenca-Sepulveda-1004779025.pdf"
                Name={t('view_cv')}
                className="w-full shadow-md hover:shadow-xl transition-all duration-300"
              />
            </li>
          </ul>

          {/* Botón CV escritorio */}
          <div className="hidden lg:flex">
            <ButtonDownload
              href="/Hv-Juan-Camilo-Cuenca-Sepulveda-1004779025.pdf"
              Name={t('view_cv')}
              className="shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
