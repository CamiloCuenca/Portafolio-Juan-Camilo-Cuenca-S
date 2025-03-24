import { FaJava, FaPython, FaReact, FaBootstrap, FaDocker , FaLinux , FaFigma } from "react-icons/fa";
import { SiSpringboot, SiPostman, SiExpo, SiTypescript ,SiIntellijidea  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
    return (
        <section className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Mis Skills</h2>

            {/* Sección de Habilidades organizada en filas */}
            <div className="space-y-8">
                {/* Lenguajes */}
                <div className="bg-white p-4 rounded-lg shadow-2xl">
                    <h3 className="text-lg font-semibold mb-3">Languages</h3>
                    <div className="flex gap-6">
                        <FaJava className="h-12 w-12 text-orange-600" />
                        <IoLogoJavascript className="h-12 w-12 text-yellow-500" />
                        <FaPython className="h-12 w-12 text-blue-500" />
                        <SiTypescript className="h-12 w-12 text-blue-600" />
                    </div>
                </div>

                {/* Frameworks */}
                <div className="bg-white p-4 rounded-lg shadow-2xl">
                    <h3 className="text-lg font-semibold mb-3">Frameworks</h3>
                    <div className="flex gap-6">
                        <SiSpringboot className="h-12 w-12 text-green-600" />
                        <FaReact className="h-12 w-12 text-cyan-500" />
                        <RiTailwindCssFill className="h-12 w-12 text-blue-400" />
                        <FaBootstrap className="h-12 w-12 text-purple-500" />
                        <SiExpo className="h-12 w-12 text-black" />
                    </div>
                </div>

                {/* Herramientas */}
                <div className="bg-white p-4 rounded-lg shadow-2xl">
                    <h3 className="text-lg font-semibold mb-3">Tools</h3>
                    <div className="flex gap-6">
                        <FaDocker className="h-12 w-12 text-blue-700" />
                        <SiPostman className="h-12 w-12 text-orange-500" />
                        <FaLinux className="h-12 w-12 text-black" />
                        <SiIntellijidea className="h-12 w-12 text-black" />
                        <FaFigma className="h-12 w-12 " />
                    </div>
                </div>
            </div>
        </section>
    );
}
