import Footer from "../components/Footer";
import Faq from "../components/sections/LandingPage/Faq";
import Hero from "../components/sections/LandingPage/Hero";
import Intro from "../components/sections/LandingPage/Intro";
import JudgingCriteria from "../components/sections/LandingPage/JudgingCriteria";
import PartnersAndSponsors from "../components/sections/LandingPage/PartnersAndSponsors";
import PrivacyPolicyAndTerms from "../components/sections/LandingPage/PrivacyPolicyAndTerms";
import PrizesAndRewards from "../components/sections/LandingPage/PrizesAndRewards";
import RulesAndGuidelines from "../components/sections/LandingPage/RulesAndGuidelines";
import Timeline from "../components/sections/LandingPage/Timeline";

export default function LandingPage() {
    return (
        <div className="bg-blue-200">
            <Hero />
            <div className="bg-white w-full h-px"></div>
            <Intro />
            <div className="bg-white w-full h-px"></div>
            <RulesAndGuidelines />
            <div className="bg-white w-full h-px"></div>
            <JudgingCriteria />
            <div className="bg-white w-full h-px"></div>
            <Faq />
            <div className="bg-white w-full h-px"></div>
            <Timeline />
            <div className="bg-white w-full h-px"></div>
            <PrizesAndRewards />
            <div className="bg-white w-full h-px"></div>
            <PartnersAndSponsors />
            <div className="bg-white w-full h-px"></div>
            <PrivacyPolicyAndTerms />
            <div className="bg-white w-full h-px"></div>
            <Footer />
        </div>
    );
}