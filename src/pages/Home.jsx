import HeroSection from '../components/layouts/HeroSection';
import Skills from '../components/layouts/Skills';
import SocialLinks from '../components/layouts/SocialLinks';
import AboutMe from '../components/layouts/AboutMe';

export default function Home() {
    return (
        <>
        <HeroSection></HeroSection>
        <SocialLinks />
        <div className="flex">
            

            
        <AboutMe /> 
                    <Skills />
                    <div></div>
                 
          

           
        </div>
      
        </>
    );
}

