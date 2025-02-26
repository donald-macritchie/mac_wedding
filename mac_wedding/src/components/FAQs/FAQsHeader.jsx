import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQsHeader = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    wordsRef.current.forEach((word, index) => {
      if (word) {
        gsap.fromTo(
          word,
          {
            opacity: 0,
            x: -200, // Start further left
            y: -200, // Start further up
            scale: 1.2,
            rotate: index % 2 === 0 ? -10 : 10, // Alternate rotation
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: word,
              start: "top 60%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="w-full h-screen bg-black text-[#A8D1AD] flex items-center justify-center relative">
      {/* Containing Div with Fixed Width for All Screens */}
      <div className="relative w-full max-w-[80%] md:max-w-[40%] h-full">
        {/* F (Top Left) */}
        <p
          ref={(el) => (wordsRef.current[0] = el)}
          className="absolute top-[10%] left-[5%] text-8xl font-extrabold tracking-wide opacity-0"
        >
          F
        </p>

        {/* A (Further Down & Right) */}
        <p
          ref={(el) => (wordsRef.current[1] = el)}
          className="absolute top-[30%] left-[20%] text-8xl font-light italic opacity-0"
        >
          A
        </p>

        {/* Q (Further Down & Right) */}
        <p
          ref={(el) => (wordsRef.current[2] = el)}
          className="absolute top-[50%] left-[40%] text-8xl font-bold tracking-wider opacity-0"
        >
          Q
        </p>

        {/* S (Bottom Right) */}
        <p
          ref={(el) => (wordsRef.current[3] = el)}
          className="absolute bottom-[20%] left-[80%] text-6xl font-bold tracking-wider opacity-0"
        >
          s
        </p>
      </div>
    </div>
  );
};

export default FAQsHeader;
