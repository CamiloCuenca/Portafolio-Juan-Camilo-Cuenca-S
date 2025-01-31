export default function Header() {
    return (
        <header className="bg-purple p-4 text-white">
            <nav>
                <ul className="flex space-x-15 justify-center font-bold">
                    <li>
                        <a href="#about" className="hover:text-purple-300 transition duration-300">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-purple-300 transition duration-300">
                            My Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-purple-300 transition duration-300">
                            My Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}