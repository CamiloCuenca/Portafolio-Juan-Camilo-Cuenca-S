import HeroSection from '../components/layouts/HeroSection';
import Skills from '../components/layouts/Skills';
import SocialLinks from '../components/layouts/SocialLinks';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
import Education from '../components/layouts/Education';
import Experience from '../components/layouts/Experience';
import GitHubStats from '../components/layouts/GitHubStats';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Social Links */}
      <div className="w-full ">
        <SocialLinks />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 mt-12 max-w-5xl">
        {/* About Me and Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 mb-12">
          {/* About Me */}
          <div className="p-4 bg-white shadow-md rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <AboutMe />
          </div>

          {/* Skills */}
          <div className="p-4 bg-white shadow-md rounded-2xl flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <Skills />
          </div>
        </div>

        {/* Education and Experience Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 mb-12">
          {/* Education */}
          <div className="p-4 bg-white shadow-md rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <Education />
          </div>

          {/* Experience */}
          <div className="p-4 bg-white shadow-md rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <Experience />
          </div>
        </div>

        {/* Projects Section */}
        <div className="p-4 bg-white shadow-md rounded-2xl hover:shadow-xl ">
          <Projects />
        </div>
        {/* Botón Saber más sobre mí */}
        <div className="flex justify-center mt-8 mb-8">
          <button
            id="show-github-stats-btn"
            className="bg-primary text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-secondary transition-colors duration-300"
            onClick={() => {
              const stats = document.getElementById('github-stats-section');
              if (stats) stats.style.display = stats.style.display === 'none' ? 'block' : 'none';
            }}
          >
          Más sobre mí
          </button>
        </div>
        {/* Sección GitHubStats oculta inicialmente */}
        <div id="github-stats-section" style={{ display: 'none' }} className="mt-8">
          <GitHubStats />
        </div>
      </div>
    </div>
  );
}
