import AboutUsHero from "../components/about/AboutUsHero";
import AboutUsStory from "../components/about/AboutUsStory";
import VisionMission from "../components/about/VisionMission";
import Leadership from "../components/about/Leadership";
import Philosophy from "../components/about/Philosophy";
import AboutUsCTA from "../components/about/AboutUsCTA";

const AboutUsPage = () => {
    return (
        <main className="overflow-hidden bg-black text-white">
            <AboutUsHero />

            <AboutUsStory />

            <VisionMission />

            <Leadership />

            <Philosophy />

            <AboutUsCTA />
        </main>
    );
};

export default AboutUsPage;