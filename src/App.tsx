import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const menuListRef = useRef(null);
  const [bgClass, setBgClass] = useState(true);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate the TEXT upward on scroll
      gsap.to(".scroll-menu", {
        y: -800,
        ease: "sine.inOut",
        duration: 1,
        scrollTrigger: {
          toggleActions: "play none reverse none",
          trigger: containerRef.current, // start animation when this section enters
          start: "10px top ", // when top of section hits top of viewport
          end: "100px top", // when section scrolls out of view
          // pin: true,
          // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: 1, // snap to the closest label in the timeline
          markers: true, // set to true to debug
        },
      });
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "10px top",
        // end: "top top",
        // markers: true,
        onEnter: () => setBgClass(false),
        onLeaveBack: () => setBgClass(true),
      });

      gsap.to(".black-top", {
        y: -700,
        rotate: 0,
        ease: "sine.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current, // start animation when this section enters
          start: "10px top ", // when top of section hits top of viewport
          end: "100px top", // when section scrolls out of view
          pin: true,
          toggleActions: "play none reverse none",
          // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: 1, // snap to the closest label in the timeline
          markers: true, // set to true to debug
        },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "bottom center", // when the animation ends
        end: "+=400", // how long it stays pinned
        pin: true,
        // markers: true,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="flex flex-col">
      <div
        ref={containerRef}
        className="relative h-screen w-screen overflow-x-clip"
      >
        <div
          ref={bgRef}
          className={`${
            bgClass
              ? "rotate-0 -translate-x-600 -translate-y-300"
              : "-translate-x-360 -translate-y-340 rotate-90"
          } bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 h-[250vh] w-[250vw] duration-400 ease-out transition-all`}
        ></div>
        <ul
          ref={menuListRef}
          className="scroll-menu flex flex-col gap-14 absolute left-20 top-24 text-9xl font-Grotesk [&_li]:rotate-3 [&_li]:transition-all [&_li]:ease-out [&_li]:duration-300 [&_li]:hover:cursor-pointer"
        >
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">About Me</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">Skills</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">Works</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
          <li className="relative group hover:rotate-0 hover:scale-125 hover:-translate-y-4 hover:translate-x-16">
            <p className="relative z-10">Contacts</p>
            <div className="absolute -top-1 -translate-x-244 bg-white w-222 transition-all ease-out duration-300 h-full group-hover:-translate-x-24"></div>
          </li>
        </ul>
        <div className="black-top absolute bottom-0 right-0 bg-gray-950 w-[110vw] h-48 -rotate-10 translate-x-40 translate-y-40">
          <p className="absolute top-0 right-40 text-8xl font-extrabold text-white leading-none font-Cairoli">
            WELCOME
          </p>
        </div>
      </div>
      <section className="h-screen w-screen"></section>
    </div>
  );
}

export default App;
