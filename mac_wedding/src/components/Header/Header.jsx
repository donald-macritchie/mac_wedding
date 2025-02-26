import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import upperBanner from "/images/upperBanner.svg";

const fontClasses = [
  "montserrat",
  "oswald",
  "josefin-sans",
  "new-rocker-regular",
  "metal-mania-regular",
  "orbitron",
  "fontdiner-swanky-regular",
  "imperial-script-regular",
  "borel-regular",
  "kablammo",
  "unifrakturmaguntia-regular",
  "bungee-shade-regular",
  "barrio-regular",
  "rubik-puddles-regular",
  "bonbon-regular",
  "butterfly-kids-regular",
  "caesar-dressing-regular",
  "splash-regular",
  "londrina-sketch-regular",
  "mrs-saint-delafield-regular",
];

const getRandomFont = () =>
  fontClasses[Math.floor(Math.random() * fontClasses.length)];

const Header = () => {
  const [donFont, setDonFont] = useState(getRandomFont());
  const [ellieFont, setEllieFont] = useState(getRandomFont());

  useEffect(() => {
    const interval = setInterval(() => {
      setDonFont(getRandomFont());
      setEllieFont(getRandomFont());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center petit-formal-script-regular">
        {/* Fix the banner image to the top of the viewport */}
        <div className="absolute top-0 w-full">
          <img
            src={upperBanner}
            alt="Upper Banner"
            className="scale-y-[-1] w-full object-cover"
          />
        </div>
        <div className="absolute">
          <div className="text-xl">
            <p>You Are Invited</p>
            <p>To the Wedding of</p>
          </div>
          <div
            id="don-name"
            className={`${donFont} text-6xl p-20 transition-all duration-500`}
          >
            Don
          </div>
          <div className="text-4xl">and</div>
          <div
            id="ellie-name"
            className={`${ellieFont} text-6xl p-20 transition-all duration-500`}
          >
            Ellie
          </div>
          <div>
            <p className="text-2xl">Saturday 31st of May 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
