import HeroSection from "@/app/components/HeroSection";
import AboutMe from "@/app/components/AboutMeSection";
import TechStack from "@/app/components/TechStackSection";
import Projects from "@/app/components/ProjectSection";
import ContactMe from "@/app/components/ContactMeSection";

export default function DashboardPage(){
    return(
        <>
            <HeroSection/>
            <AboutMe/>
            <TechStack/>
            {/*<Projects />*/}
            <ContactMe/>
        </>
    )
}