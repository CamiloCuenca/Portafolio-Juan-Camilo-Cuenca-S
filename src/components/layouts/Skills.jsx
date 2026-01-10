import { activeAnimations } from "motion";
import PropTypes from "prop-types";
;

const skills = [
  // Languages
  { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", section: "Languages" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", section: "Languages" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", section: "Languages" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", section: "Languages" },
  { name: "Kotlin", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg", section: "Languages" },
  { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", section: "Languages" },

  // Frameworks
  { name: "Spring Boot", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", section: "Frameworks" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", section: "Frameworks" },
  { name: "Tailwind CSS", icon: "public/assets/Tailwind_CSS_Logo.svg.png", section: "Frameworks" },
  { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg", section: "Frameworks" },
  { name: "Expo", icon: "https://www.svgrepo.com/show/373591/expo.svg", section: "Frameworks" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", section: "Frameworks" },
  { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", section: "Frameworks" },
  { name: "Angular", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg", section: "Frameworks" },
  // Tools
  { name: "IntelliJ IDEA", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg", section: "Tools" },
  { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", section: "Tools" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", section: "Tools" },
  { name: "Android Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg", section: "Tools" }, 
  { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", section: "Tools" },
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", section: "Tools" },
  { name: "GitHub Actions", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg", section: "Tools" },
  { name: "Postman", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg", section: "Tools" },
  { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", section: "Tools" },
  { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", section: "Tools" },
  { name: "Jupyter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg", section: "Tools" },
  { name: "WordPress", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg", section: "Tools" },
];

const sections = ["Languages", "Frameworks", "Tools"];

const SkillIcon = ({ icon, name }) => (
  <div className="group relative flex items-center justify-center
                  w-18 h-14 sm:w-18 sm:h-18
                  rounded-xl border border-gray-200
                  bg-white transition-all duration-200
                  hover:scale-105 hover:shadow-md">

    <img
      src={icon}
      alt={name}
      loading="lazy"
      className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
    />

    {/* Tooltip */}
    <span className="absolute -bottom-8 opacity-0 scale-90
                     group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-200
                     rounded-md bg-gray-900 px-2 py-1
                     text-xs text-white whitespace-nowrap shadow-lg">
      {name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-14">
      <header className="text-center mb-12">
        <h2 className="text-heading-2 text-gray-800">Mis Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-3 rounded-full" />
      </header>

      <div className="space-y-19">
        {sections.map(section => (
          <div
            key={section}
            className="rounded-xl border border-gray-200 bg-white p-6
                       transition-shadow hover:shadow-lg"
          >
            <h3 className="text-heading-4 text-center text-gray-800 mb-6">
              {section}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
              {skills
                .filter(skill => skill.section === section)
                .map(skill => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

SkillIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
