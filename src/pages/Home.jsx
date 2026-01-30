import React, { lazy, Suspense } from "react";
import HeroSection from '../components/layouts/HeroSection';
import ScrollToTopButton from "../components/common/ScrollToTopButton";

// Lazy load non-critical sections - each gets its own chunk
const SocialLinks = lazy(() => import('../components/layouts/SocialLinks'));
const AboutMe = lazy(() => import('../components/layouts/AboutMe'));
const Skills = lazy(() => import('../components/layouts/Skills'));
const Education = lazy(() => import('../components/layouts/Education'));
const Experience = lazy(() => import('../components/layouts/Experience'));
const LatestProjects = lazy(() => import('../components/layouts/LatestProjects'));
const Projects = lazy(() => import('../components/layouts/Projects'));
const Certificates = lazy(() => import('../components/layouts/Certificates'));
const Testimonial = lazy(() => import('../components/layouts/Testimonial'));


 

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
        <Suspense fallback={<div className="h-20 bg-white/40" />}>
          <SocialLinks />
        </Suspense>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 mt-12 max-w-5xl">



        {/* Education and Experience Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 mb-12">
          {/* Education */}
          <div className="p-4  rounded-2xl ">
            <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
              <Education />
            </Suspense>
          </div>

          {/* Experience */}
          <div className="p-4 rounded-2xl">
            <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
              <Experience />
            </Suspense>
          </div>
        </div>

        {/* About Me and Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 mb-12">

          {/* About Me */}
          <div className="p-4  rounded-2xl ">
            <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
              <AboutMe />
            </Suspense>
          </div>

          {/* Skills */}
          <div className="p-4  rounded-2xl flex flex-col justify-between">
            <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
              <Skills />
            </Suspense>
          </div>
        </div>



        <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
          <LatestProjects />
        </Suspense>

        {/* Projects Section */}
        <div className="p-4 rounded-2xl  ">
          <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
            <Projects />
          </Suspense>
        </div>


        <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
          <Certificates />
        </Suspense>

        <Suspense fallback={<div className="h-40 bg-white/40 rounded-xl" /> }>
          <Testimonial />
        </Suspense>
         
        
      </div>

       <ScrollToTopButton />
    </div>
  );
}
