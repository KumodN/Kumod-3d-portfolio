import gsap from "gsap";
import { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const [showMore, setShowMore] = useState(false);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Featured Projects"
          sub="Some of the things I've built"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6 space-y-6">
          {projects.map(
            ({ title, description, imgPath, link, bgColor, tech }) => (
              <div key={title} className="break-inside-avoid">
                <a href={link || "#"} target="_blank" rel="noopener noreferrer">
                  <GlowCard card={{}} showStars={false}>
                    <div
                      className="image-wrapper p-2 rounded-lg"
                      style={{ backgroundColor: bgColor }}
                    >
                      <img src={imgPath} alt={title} />
                    </div>
                    <h2 className="mt-4 font-semibold text-lg">{title}</h2>
                    <p className="text-white-50 mt-2">{description}</p>
                    <small className="text-white/60 mt-2">{tech}</small>
                  </GlowCard>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
