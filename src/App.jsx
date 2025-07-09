import ClickSpark from "./ClickSpark";
import ParticlesB from "./components/HeroModels/ParticlesB";
import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Background particles layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesB
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ClickSpark must be above with pointer events enabled */}

      {/* Main content */}
      <ClickSpark
        sparkColor="white-50"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="relative z-10">
          <NavBar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          {/* <ExperienceSection /> */}
          <TechStack />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default App;
