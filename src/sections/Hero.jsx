import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import GlowCard from "../components/GlowCard";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                                            rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into real projects</h1>
              <h1>that deliver results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mb-4">
              Hi I'm Kumod, a developer based in Sri Lanka with a passion for
              code.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
              text="See my Work"
            />
          </div>
        </header>
        {/* Right 3D model */}

        <figure className="flex justify-center items-center w-full">
          <div className="hero-3d-layout">
            <img
              src="/images/hero.png"
              alt="portrait"
              className="w-full h-full object-cover"
            />
            {/* <HeroExperience /> */}
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
