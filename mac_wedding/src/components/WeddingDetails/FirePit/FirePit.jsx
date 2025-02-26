import { useState, useEffect } from "react";
import firepitImage from "/images/smoke_and_soul.jpg"; // Replace with your firepit image

const fonts = [
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

const FirePit = () => {
  const [randomFont, setRandomFont] = useState("");

  useEffect(() => {
    // Function to pick a random font
    const changeFont = () => {
      const randomIndex = Math.floor(Math.random() * fonts.length);
      setRandomFont(fonts[randomIndex]);
    };

    // Change font every 500ms (0.5s)
    const interval = setInterval(changeFont, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Firepit Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center relative w-full">
        {/* Background Image with Fade Effect */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${firepitImage})`,
          }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-20 p-10 max-w-[300px] w-80 h-70 rounded-3xl firepit-text text-[#A8D1AD] border-2 border-[#A8D1AD]">
          {/* Apply Random Font to H1 */}
          <h1 className={`text-4xl font-bold ${randomFont}`}>The Fire Pit</h1>
          <div className="mt-4 text-xl absolute top-30 montserrat">
            <p>Smoke and Soul</p>
            <p>6 Littlejohn St</p>
            <p>Aberdeen</p>
            <p>AB10 1FF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirePit;
