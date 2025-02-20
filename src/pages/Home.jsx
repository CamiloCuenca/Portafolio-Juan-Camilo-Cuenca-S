import HeroSection from '../components/layouts/HeroSection';
import Skills from '../components/layouts/Skills';
import SocialLinks from '../components/layouts/SocialLinks';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
import Education from '../components/layouts/Education';
import Experience from '../components/layouts/Experience';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Social Links */}
      <div className='w-full'>

      <SocialLinks />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-2 mt-8">
        {/* About Me and Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* About Me */}
          <div className="p-6 ">
            <AboutMe />
          </div>

          {/* Skills */}
          <div className="p-6">
            <Skills />
          </div>
        </div>

        {/* Education and Experience Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div className="p-6 ">
            <Education />
          </div>

          {/* Experience */}
          <div className="p-6 ">
            <Experience />
          </div>
        </div>

        {/* Projects Section */}
        <div className="p-6">
          <Projects />
        </div>
      </div>
    </>
  );
}
