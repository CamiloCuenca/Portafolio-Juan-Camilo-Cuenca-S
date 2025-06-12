import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú
import ButtonDownload from "../common/ButtonDownload";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-primary p-4 text-white">
            <nav className="flex justify-between items-center max-w-9xl mx-auto">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img className="h-10 w-auto sm:h-8 lg:h-12" src="/assets/Logo.svg" alt="Logo" />
                </div>

                {/* Menú hamburguesa en móviles */}
                <button 
                    className="lg:hidden text-white focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>

                {/* Lista de navegación */}
                <ul className={`lg:flex space-x-8 font-bold text-lg transition-all duration-300 
                    ${isOpen ? "block absolute top-16 left-0 w-full bg-primary p-4" : "hidden lg:flex"}`}
                >
                    <li>
                        <a href="#about" className="hover:text-secondary transition duration-300 block py-2">
                        Acerca de mí
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-secondary transition duration-300 block py-2">
                        Mis Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-secondary transition duration-300 block py-2">
                            Mis proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#education" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                            }, 1000); // Ajusta el tiempo si lo deseas
                          }}
                          className="hover:text-secondary transition duration-300 block py-2 cursor-pointer">
                          Educación y Experiencia
                        </a>
                    </li>
                </ul>

                {/* Botón de descarga */}
                <div className="hidden lg:flex">
                    <ButtonDownload />
                </div>
            </nav>
        </header>
    );
}
