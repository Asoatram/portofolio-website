import HeroSection from "@/app/components/HeroSection";
import AboutMe from "@/app/components/AboutMeSection";
import TechStack from "@/app/components/TechStackSection";

export default function DashboardPage(){
    return(
        <>
            <HeroSection/>
            <AboutMe/>
            <TechStack/>
        </>
    )
}