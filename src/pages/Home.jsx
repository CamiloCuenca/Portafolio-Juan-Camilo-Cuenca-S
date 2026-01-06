import React from "react";
import HeroSection from '../components/layouts/HeroSection';
import Skills from '../components/layouts/Skills';
import SocialLinks from '../components/layouts/SocialLinks';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
import Education from '../components/layouts/Education';
import Experience from '../components/layouts/Experience';
import Certificates from '../components/layouts/Certificates';
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import Testimonial from "../components/layouts/Testimonial";
import LatestProjects from "../components/layouts/latestProjects";


 

export default function Home() {
  return (
    <div
      className="bg-background min-h-screen overflow-x-hidden "
      style={{
        position: 'relative',
        zIndex: 1,
        backgroundImage:
          `linear-gradient(to right, rgba(24,49,83,0.06) 3px, transparent 1px),` +
          `linear-gradient(to bottom, rgba(24,49,83,0.06) 3px, transparent 1px)` ,
        backgroundSize: '40px 40px',
      }}
    >
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
          <div className="p-4  rounded-2xl ">
            <AboutMe />
          </div>

          {/* Skills */}
          <div className="p-4  rounded-2xl flex flex-col justify-between">
            <Skills />
          </div>
        </div>

        {/* Education and Experience Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 mb-12">
          {/* Education */}
          <div className="p-4  rounded-2xl ">
            <Education />
          </div>

          {/* Experience */}
          <div className="p-4 rounded-2xl">
            <Experience />
          </div>
        </div>

        <LatestProjects />

        {/* Projects Section */}
        <div className="p-4 rounded-2xl  ">
          <Projects />
        </div>


        
        <Certificates />

        <Testimonial />
         
        
      </div>

       <ScrollToTopButton />
    </div>
  );
}
