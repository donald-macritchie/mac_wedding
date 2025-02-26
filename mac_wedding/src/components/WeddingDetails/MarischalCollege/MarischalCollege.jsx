import { useState, useEffect } from "react";
import marischal_college from "/images/marischal_college.png";

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

const MarischalCollege = () => {
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
      {/* Ceremony Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center relative w-full">
        {/* Background Image with Fade Effect */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(${marischal_college})`,
          }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-20 p-10 max-w-[300px] w-80 h-70 rounded-3xl ceremony-text text-[#A8D1AD] border-2 border-[#A8D1AD]">
          {/* Apply Random Font to H1 */}
          <h1 className={`text-4xl font-bold ${randomFont}`}>The Ceremony</h1>
          <div className="mt-4 text-xl absolute top-30 montserrat">
            <p>Marischal College</p>
            <p>Broad Street</p>
            <p>Aberdeen</p>
            <p>AB10 1AB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarischalCollege;
