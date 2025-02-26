import { useState, useEffect } from "react";
import converse from "/images/converse.png";

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

const DressCode = () => {
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
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${converse})`,
          }}
        ></div>

        {/* Text Content with Semi-Transparent Background */}
        <div
          className="relative z-10 flex flex-col items-center text-center my-20 p-10 max-w-[350px] w-120 h-160 rounded-3xl firepit-text text-[#A8D1AD] border-2 border-[#A8D1AD]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Semi-transparent background
        >
          {/* Apply Random Font to H1 */}
          <h1 className={`text-4xl font-bold ${randomFont}`}>What to Wear?</h1>
          <div className="mt-4 text-md absolute top-30 montserrat">
            <p className="p-4">
              We want you to look amazing, and feel amazing.
            </p>
            <p className="p-4">
              Wear your kilts, or if that’s not your thing, go for some tartan
              trews.
            </p>
            <p className="p-4">
              If dresses are more your style, go for it! Whether it’s that dress
              you haven’t worn in ages, the one you’ve been saving for special
              occasions, or even the one you've had your eye on in the shop
              window, we want you to feel your best and look incredible!
            </p>
            <p className="p-4">
              And don’t forget to stash a pair of comfy trainers in your bag.
              There will definitely be dancing, and you can bet we’ll have ours
              on too!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
