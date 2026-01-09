import PropTypes from "prop-types";


const skills = [
  // Languages
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    section: "Languages"
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    section: "Languages"
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    section: "Languages"
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    section: "Languages"
  },
  {
    name: "Kotlin",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
    section: "Languages"
  },
  {
    name: "PHP",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    section: "Languages"
  },
  // Frameworks
  {
    name: "Spring Boot",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
    section: "Frameworks"
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    section: "Frameworks"
  },
  {
    name: "Tailwind CSS",
    icon: "public/assets/Tailwind_CSS_Logo.svg.png",
    section: "Frameworks",
    loading: "lazy"
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
    section: "Frameworks"
  },
  {
    name: "Expo",
    icon: "https://camo.githubusercontent.com/1a0cbe158fb6318c1f49dc12b49dce5a5d56f1fd05c4c9ba0fca887c0b50eb3a/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3337333539312f6578706f2e737667",
    section: "Frameworks"
  },
  // Tools
  {
    name: "IntelliJ IDEA",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg",
    section: "Tools"
  },
  {
    name: "Visual Studio Code",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    section: "Tools"
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    section: "Tools"
  },
  {
    name: "Postman",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
    section: "Tools"
  },
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    section: "Tools"
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    section: "Tools"
  },
  {
    name: "WordPress",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg",
    section: "Tools"
  }
];

const SkillIcon = ({ icon, name }) => (
  <div className="group relative flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 transition-all duration-300 hover:scale-110 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
    <div className="relative">
      <img 
        src={icon} 
        alt={name} 
        loading="lazy"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain transition-all duration-300 group-hover:filter group-hover:drop-shadow-lg" 
      />
      <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <span className="absolute -bottom-2 scale-0 transition-all duration-300 rounded-lg bg-gray-800 px-3 py-1 text-caption text-white group-hover:scale-100 whitespace-nowrap z-10 shadow-lg">
      {name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-heading-2 mb-4 text-gray-800">Mis Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-10 md:space-y-12">
        {/* Languages */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <h3 className="text-heading-4 mb-8 text-gray-800 text-center">Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {skills.filter(s => s.section === "Languages").map(skill => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
        
        {/* Frameworks */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <h3 className="text-heading-4 mb-8 text-gray-800 text-center">Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {skills.filter(s => s.section === "Frameworks").map(skill => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
        
        {/* Tools */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <h3 className="text-heading-4 mb-8 text-gray-800 text-center">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {skills.filter(s => s.section === "Tools").map(skill => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

SkillIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
