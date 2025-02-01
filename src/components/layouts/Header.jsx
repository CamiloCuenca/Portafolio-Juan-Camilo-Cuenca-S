import ButtonDownload from "../common/ButtonDownload ";

export default function Header() {
    return (
        <header className="bg-purple p-4 text-white">
            <nav className="flex justify-between items-center">
                {/* Espacio para el Logo */}
                <div className="flex-1">
                    <img className="h-10 w-auto" src="src/assets/Logo.svg" alt="Logo" />
                </div>

                {/* Lista de navegación centrada */}
                <ul className="flex space-x-8 font-bold text-lg">
                    <li>
                        <a href="#about" className="hover:text-purple-400 transition duration-300">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-purple-400 transition duration-300">
                            My Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-purple-400 transition duration-300">
                            My Projects
                        </a>
                    </li>
                </ul>

                {/* Botón de descarga a la derecha */}
                <div className="flex-1 flex justify-end mr-2.5">
                    <ButtonDownload />

                </div>
            </nav>
        </header>
    );
}