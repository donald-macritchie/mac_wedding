import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reception = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    wordsRef.current.forEach((word, index) => {
      gsap.fromTo(
        word,
        {
          opacity: 0,
          y: 80,
          scale: 1.1,
          rotate: index % 2 === 0 ? -5 : 5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: word,
            start: "top 75%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-screen bg-black text-[#A8D1AD] flex items-center justify-center relative">
      {/* Containing Div with Fixed Width for All Screens */}
      <div className="relative w-full max-w-[80%] md:max-w-[40%] h-full">
        {/* WHERE (Top Left) */}
        <p
          ref={(el) => (wordsRef.current[0] = el)}
          className="absolute top-[10%] left-[0%] text-8xl font-extrabold tracking-wide opacity-0"
        >
          WHERE
        </p>

        {/* ARE WE (Middle Right) */}
        <p
          ref={(el) => (wordsRef.current[1] = el)}
          className="absolute top-[30%] right-[5%] text-6xl font-light italic opacity-0"
        >
          ARE WE
        </p>

        {/* GETTING (Lower Left) */}
        <p
          ref={(el) => (wordsRef.current[2] = el)}
          className="absolute bottom-[45%] left-[5%] text-6xl font-light opacity-0"
        >
          HAVING THE
        </p>

        {/* HITCHED? (Centered at Bottom) */}
        <p
          ref={(el) => (wordsRef.current[3] = el)}
          className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 text-5xl md:text-7xl font-bold tracking-wider opacity-0"
        >
          RECEPTION?
        </p>
      </div>
    </div>
  );
};

export default Reception;
