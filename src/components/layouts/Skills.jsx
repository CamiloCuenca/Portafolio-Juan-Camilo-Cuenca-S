import PropTypes from "prop-types";
import React from "react";


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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    section: "Frameworks"
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
    name: "IntelliJ IDEA",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg",
    section: "Tools"
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    section: "Tools"
  }
];



const SkillIcon = ({ icon, name }) => (
  <div className="group relative flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 transition-transform duration-300 hover:scale-110 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
    <img 
      src={icon} 
      alt={name} 
      className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain transition-all duration-300 group-hover:filter group-hover:drop-shadow-lg" 
    />
    <span className="absolute -bottom-2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
      {name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Mis Skills</h2>
      <div className="space-y-8 md:space-y-10">
        {/* Languages */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transition-shadow hover:shadow-xl ">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {skills.filter(s => s.section === "Languages").map(skill => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
        {/* Frameworks */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transition-shadow hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
            {skills.filter(s => s.section === "Frameworks").map(skill => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transition-shadow hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
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
