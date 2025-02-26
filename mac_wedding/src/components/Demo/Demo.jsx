import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Demo = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".square", {
    x: 500,
    duration: 3,
    scrollTrigger: {
      trigger: ".square",
      start: "top 60%",
      end: "top 40%",
      toggleActions: "restart pause resume complete",
      //              onEnter onLeave onEnterBack onLeaveBack

      markers: {
        startColor: "purple",
        endColor: "fuchsia",
        fontSize: "2em",
      },
    },
  });

  return (
    <div>
      <div className="div1"></div>
      <div className="div2">
        <div className="square"></div>
      </div>
    </div>
  );
};

export default Demo;
