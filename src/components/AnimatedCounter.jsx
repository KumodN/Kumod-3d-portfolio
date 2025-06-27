import React, { useRef, useEffect, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AnimatedCounter = () => {
  const counterRef = useRef([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#counter-section",
      start: "top 80%",
      onEnter: () => setTriggered(true),
      once: true, // remove this line if you want to allow retriggering
    });
  }, []);

  return (
    <div id="counter-section" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (counterRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center card glassCard"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {triggered ? (
                <CountUp end={item.value} duration={2} suffix={item.suffix} />
              ) : (
                "0" + item.suffix
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
