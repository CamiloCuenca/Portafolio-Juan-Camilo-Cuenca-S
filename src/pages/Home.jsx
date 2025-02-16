import HeroSection from '../components/layouts/HeroSection';
import Skills from '../components/layouts/Skills';
import SocialLinks from '../components/layouts/SocialLinks';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';

export default function Home() {
    return (
        <>
            <HeroSection />
            <SocialLinks />
            
            <div className="grid grid-cols-2 gap-4">
                <AboutMe />
                <div className=''>
                <Skills />
                </div>
                
                <div className="col-span-3 flex justify-start mt-3  p-6">
                    <Projects />
                </div>
            </div>
        </>
    );
}
