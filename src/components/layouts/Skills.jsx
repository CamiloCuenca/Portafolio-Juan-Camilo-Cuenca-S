import { FaJava, FaPython, FaReact, FaBootstrap, FaDocker, FaLinux, FaFigma } from "react-icons/fa";
import { SiSpringboot, SiPostman, SiExpo, SiTypescript, SiIntellijidea } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillIcon = ({ Icon, name, color }) => (
    <div className="group relative flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110">
        <Icon className={`h-12 w-12 ${color} transition-all duration-300 group-hover:filter group-hover:drop-shadow-lg`} />
        <span className="absolute -bottom-2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            {name}
        </span>
    </div>
);

export default function Skills() {
    return (
        <section id="skills" className="max-w-4xl mx-auto p-4 md:p-6">
            <h2 className="text-2xl font-bold text-center mb-8">Mis Skills</h2>

            <div className="space-y-8 md:space-y-12">
                {/* Languages */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transition-shadow hover:shadow-xl">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Languages</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
                        <SkillIcon Icon={FaJava} name="Java" color="text-orange-600" />
                        <SkillIcon Icon={IoLogoJavascript} name="JavaScript" color="text-yellow-500" />
                        <SkillIcon Icon={FaPython} name="Python" color="text-blue-500" />
                        <SkillIcon Icon={SiTypescript} name="TypeScript" color="text-blue-600" />
                    </div>
                </div>

                {/* Frameworks */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transition-shadow hover:shadow-xl">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Frameworks</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
                        <SkillIcon Icon={SiSpringboot} name="Spring Boot" color="text-green-600" />
                        <SkillIcon Icon={FaReact} name="React" color="text-cyan-500" />
                        <SkillIcon Icon={RiTailwindCssFill} name="Tailwind CSS" color="text-blue-400" />
                        <SkillIcon Icon={FaBootstrap} name="Bootstrap" color="text-purple-500" />
                        <SkillIcon Icon={SiExpo} name="Expo" color="text-black" />
                    </div>
                </div>

                {/* Tools */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transition-shadow hover:shadow-xl">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Tools</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
                        <SkillIcon Icon={FaDocker} name="Docker" color="text-blue-700" />
                        <SkillIcon Icon={SiPostman} name="Postman" color="text-orange-500" />
                        <SkillIcon Icon={FaLinux} name="Linux" color="text-black" />
                        <SkillIcon Icon={SiIntellijidea} name="IntelliJ IDEA" color="text-black" />
                        <SkillIcon Icon={FaFigma} name="Figma" color="text-black" />
                    </div>
                </div>
            </div>
        </section>
    );
}
