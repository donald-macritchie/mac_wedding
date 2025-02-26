import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaClock,
  FaGlassCheers,
  FaUtensils,
  FaMusic,
  FaBed,
} from "react-icons/fa"; // Import icons
import { GiLinkedRings } from "react-icons/gi";
import { LuSpeech } from "react-icons/lu";
import { IoFastFoodOutline, IoBeer } from "react-icons/io5";

// Import different images

import flower2 from "/images/flower2.svg";
import flower3 from "/images/flower3.svg";
import flower4 from "/images/flower4.svg";
import flower5 from "/images/flower5.svg";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  { time: "2:45 PM", title: "Arrival at Marischal College", icon: <FaClock /> },
  {
    time: "3:00 PM",
    title: "Ceremony",
    location: "Marischal College Registry Office",
    icon: <GiLinkedRings />,
  },
  {
    time: "3:45 PM",
    title: "Welcome Drinks",
    location: "The Fire Pit - Smoke and Soul",
    icon: <FaGlassCheers />,
  },
  { time: "5:30 PM", title: "Speeches", icon: <LuSpeech /> },
  { time: "6:00 PM", title: "Dinner", icon: <FaUtensils /> },
  { time: "7:30 PM", title: "Let’s Dance!", icon: <FaMusic /> },
  { time: "9:30 PM", title: "Evening Snack", icon: <IoFastFoodOutline /> },
  { time: "11:30 PM", title: "Last Orders", icon: <IoBeer /> },
  { time: "12:00 AM", title: "Home Time... Maybe", icon: <FaBed /> },
];

// Array of different images to use
const timelineFlowers = [flower2, flower3, flower4, flower5];

const Timeline = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    timelineRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Icon animation (rotating slightly)
      gsap.to(el.querySelector(".event-icon"), {
        rotate: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-20 petit-formal-script-regular">
      <h2 className="text-4xl font-bold text-center mb-40">Order of the Day</h2>

      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-[#A8D1AD] transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        {timelineEvents.map((event, index) => {
          const isRightAligned = index % 2 === 0;
          const flowerImage = timelineFlowers[index % timelineFlowers.length]; // Cycle through images

          return (
            <div
              key={index}
              ref={(el) => (timelineRef.current[index] = el)}
              className={`relative flex items-center w-full mb-10 ${
                isRightAligned ? "flex-row-reverse text-right" : "text-left"
              }`}
            >
              {/* Event Dot */}
              <div className="w-6 h-6 bg-[#A8D1AD] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

              {/* Event Content */}
              <div
                className={`bg-white shadow-lg p-5 rounded-lg w-2/5 mx-10 border border-[#A8D1AD] flex flex-col justify-between h-full`}
              >
                <div className="event-text">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-lg mb-1 text-gray-600">{event.time}</p>
                  {event.location && (
                    <p className="text-gray-500">{event.location}</p>
                  )}
                </div>

                {/* Aligned Icon */}
                <div
                  className={`event-icon text-[#A8D1AD] text-3xl py-2 ${
                    isRightAligned ? "self-end" : "self-start"
                  }`}
                >
                  {event.icon}
                </div>
              </div>

              {/* Flower Image (Alternating Sides) */}
              <div
                className={`w-30 h-50 absolute top-1/2 transform -translate-y-1/2 ${
                  isRightAligned ? "left-[15%]" : "right-[15%]"
                }`}
              >
                <img src={flowerImage} alt="Decorative Flower" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
