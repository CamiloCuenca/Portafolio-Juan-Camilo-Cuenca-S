import HeroSection from '../components/layouts/HeroSection';
import Skills from '../components/layouts/Skills';
import SocialLinks from '../components/layouts/SocialLinks';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
import Education from '../components/layouts/Education';
import Experience from '../components/layouts/Experience';

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
      </div>
    </div>
  );
}
