import { Canvas } from "@react-three/fiber";
import RotatingSquare from "./components/RotatingSquare";
import RotatingIcon from "./components/RotatingIcon";
import RotatingWorks from "./components/RotatingWorks";
import WireframeSphere from "./components/WireframeSphere";
import { AnimatePresence, motion } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { View } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useLayoutEffect } from "react";
import WorkCard from "./components/WorkCard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function App() {
  const works = [
    {
      title: "Ableton Clone",
      description: "A front-end recreation of Ableton’s official homepage",
      status: "Completed",
      techStack: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "LawBandit Clone",
      description:
        "A front-end recreation of LawBandit's official homepage with added AI feature to read course syllabus and schedule tasks automatically",
      status: "In Progress",
      techStack: [
        "Node Js",
        "TypeScript",
        "Tailwind",
        "OpenAI API",
        "Supabase",
      ],
    },
    {
      title: "Pautakan Scoreboard",
      description:
        "A custom built scoreboard application for Pautakan, a university wide quiz competition",
      status: "Completed",
      techStack: ["Electron Js", "TypeScript", "Tailwind", "SQLite"],
    },
    // {
    //   title: "LawBandit Clone",
    //   description:
    //     "A front-end recreation of LawBandit's official homepage with added AI feature to read course syllabus and schedule tasks automatically",
    //   status: "In Progress",
    //   techStack: [
    //     "Node Js",
    //     "TypeScript",
    //     "Tailwind",
    //     "OpenAI API",
    //     "Supabase",
    //   ],
    // },
    // {
    //   title: "LawBandit Clone",
    //   description:
    //     "A front-end recreation of LawBandit's official homepage with added AI feature to read course syllabus and schedule tasks automatically",
    //   status: "In Progress",
    //   techStack: [
    //     "Node Js",
    //     "TypeScript",
    //     "Tailwind",
    //     "OpenAI API",
    //     "Supabase",
    //   ],
    // },
  ];

  const [indexHovered, setIndexHovered] = useState<string | null>(null);

  useEffect(() => {
    console.log("HOVERED INDEX CHANGED TO:", indexHovered);
  }, [indexHovered]);

  const groupedWorks = [];

  for (let i = 0; i < works.length; i += 4) {
    groupedWorks.push(works.slice(i, i + 4));
  }

  const groupedRefs = groupedWorks.map((group) =>
    group.map(() => React.createRef<HTMLDivElement>())
  );

  console.log("GROUPED REFS:", groupedRefs);

  // for (let i = 0; i < works.length; i++) {
  //   workCardRefs.current[i] = useRef<HTMLElement>(null);
  // }
  console.log("GROUPED WORKS:", groupedWorks);

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const wireframeRef = useRef<HTMLElement>(null);
  const testingRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const section1Visible = useInView(section1Ref, { amount: 0.3 });
  const section2Visible = useInView(section2Ref, { amount: 0.3 });
  const section3Visible = useInView(section3Ref, { amount: 0.3 });
  const section4Visible = useInView(section4Ref, { amount: 0.3 });
  const section4AllowHover = useInView(section4Ref, { amount: 1 });
  const section5Visible = useInView(section5Ref, { amount: 0.3 });

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      // Only update direction if the scroll position actually changed
      if (Math.abs(currentScrollY - lastScrollY.current) > 0.1) {
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
          console.log("Scrolling Down");
        } else if (currentScrollY < lastScrollY.current) {
          setScrollDirection("up");
          console.log("Scrolling Up");
        }
      }

      // Update the previous scroll position
      lastScrollY.current = currentScrollY;
    };

    container.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  // let headerText = "Contact Me"; // Default text for end of scroll
  let headerText = "default"; // Default text
  if (section5Visible) {
    headerText = "Contact Me";
  } else if (section4Visible) {
    headerText = "Works";
  } else if (section3Visible) {
    // Section 3 is visible (i.e., we are viewing the 'Contact Me' content)
    headerText = "History";
  } else if (section2Visible) {
    // Section 2 is visible (i.e., we are viewing the 'About Me' content)
    headerText = "About Me";
  } else if (section1Visible) {
    // Section 1 is visible, and Section 2 is either not visible or not intersecting enough
    headerText = "Leonano";
  }

  useEffect(() => {
    console.log("Section 1 Visible:", section1Visible);
    console.log("Section 2 Visible:", section2Visible);
    console.log("Section 3 Visible:", section3Visible);
    console.log("Section 4 Visible:", section4Visible);
  }, [section1Visible, section2Visible, section3Visible, section4Visible]);

  const squarePositions = [
    { x: -1, y: -1.5, z: 1.5, size: 0.4 },
    { x: -2, y: -1, z: 1.5, size: 0.5 },
    { x: -4.65, y: 0.55, z: 1.5, size: 0.1 },
    { x: -1.8, y: 1.7, z: 1.5, size: 0.3 },
    { x: 3.7, y: 1.6, z: 1.5, size: 0.2 },
    { x: 4.65, y: -0.2, z: 1.5, size: 0.17 },
    { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
  ];

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll overflow-x-clip snap-y snap-mandatory z-20"
    >
      <div className="fixed w-full top-16 z-30">
        <div className="flex justify-center items-center w-full ">
          <hr className="w-full h-[1px] bg-gradient-to-l from-white from-50% to-transparent border-0"></hr>
          <AnimatePresence mode="wait">
            <motion.h2
              className="mx-16 w-112 whitespace-nowrap font-Exo2 text-4xl text-center text-white"
              key={headerText}
              initial={
                scrollDirection === "down"
                  ? { opacity: 0, y: 20 }
                  : { opacity: 0, y: -20 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                scrollDirection === "down"
                  ? { opacity: 0, y: -20 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {headerText}
            </motion.h2>
          </AnimatePresence>
          <hr className="w-full h-[1px] bg-gradient-to-r from-white from-50% to-transparent border-0"></hr>
        </div>
      </div>
      <div>
        <div className="absolute h-full w-full z-10 pointer-events-none overflow-hidden">
          <Canvas style={{ pointerEvents: "none", clipPath: "inset(0)" }}>
            <View track={section1Ref}>
              <ambientLight intensity={0.8} />
              <pointLight position={[0, 0, 2]} intensity={5} distance={0} />
              <RotatingSquare positions={squarePositions} />
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            </View>
            <View track={wireframeRef}>
              <ambientLight intensity={1} />
              <WireframeSphere />
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            </View>
            {/* <View track={section2Ref}>
              <ambientLight intensity={0.8} />
              <pointLight position={[0, -2, 2]} intensity={5} distance={0} />
              <RotatingIcon />
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            </View> */}

            {/* {groupedRefs.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {group.map((ref, index) => (
                  <View track={ref} key={`${groupIndex}-${index}`}>
                    <ambientLight intensity={0.8} />
                    <RotatingWorks
                      hovered={indexHovered === `${groupIndex}${index}`}
                    />
                    <PerspectiveCamera
                      makeDefault
                      position={[0.5, 0, 5]}
                      fov={75}
                    />
                  </View>
                ))}
              </React.Fragment>
            ))} */}
          </Canvas>
        </div>
        <section
          ref={section1Ref}
          className="relative flex items-center flex-col h-screen w-screen bg-radial from-[#32042F] to-black snap-start"
        >
          <div className="absolute h-full w-full"></div>
          <div className="flex items-center h-full text-white">
            <div className="-translate-y-1/2 flex flex-col items-center">
              <h1 className="text-8xl font-Zrnic">Full Stack Developer</h1>
              <h2 className="text-3xl font-Exo2">
                Aspiring Developer with Front End Proficiency
              </h2>
            </div>
          </div>
        </section>
        <section
          ref={section2Ref}
          className="h-screen w-screen relative bg-black snap-center overflow-clip"
        >
          <motion.div
            className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-blue-950 to-black"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: section2Visible ? 0.6 : 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              // repeat: Infinity,
              // repeatType: "reverse",
              delay: 0.3,
            }}
            viewport={{ root: containerRef, amount: 1 }}
          ></motion.div>
          <motion.div
            className="h-full pt-16 items-center absolute flex gap-16 px-48 text-white font-Exo2 text-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: containerRef, amount: 0.5, once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-col gap-16 w-6/10">
              <p className="leading-loose">
                I'm a passionate full stack developer with experience in
                creating web application. My journey in development started with
                front-end technologies, and I've been expanding my expertise to
                cover full stack development as well.
              </p>
              <hr className="h-full"></hr>
              <div className="flex justify-between whitespace-nowrap text-2xl">
                <div className="flex flex-col gap-8">
                  <p>
                    <span className="font-bold">Location:</span> US
                  </p>
                  <p>
                    <span className="font-bold">Focus:</span> Front End
                    Development
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  <p>
                    <span className="font-bold">Skills:</span> Full Stack
                    Development
                  </p>
                  <p>
                    <span className="font-bold">Experience:</span> 4 Years
                  </p>
                </div>
              </div>
            </div>
            {/* <div style={{ perspective: 200 }}>
              <motion.div
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: 360 }}
                className="w-64 h-64 bg-blue-500"
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="w-32 h-32 bg-red-500 absolute top-8 left-8">
                  Child
                </div>
              </motion.div>
            </div> */}
            <div className="flex flex-col gap-6 items-center">
              <motion.div
                className="h-48 w-48 bg-cyan-400/90 border-3 border-cyan-400 shadow-[0_0_25px_#22D3EE]  rounded-full"
                initial={{ y: 0 }}
                animate={{ y: -20 }}
                style={{ transformStyle: "preserve-3d" }}
                transition={{
                  y: {
                    duration: 3,
                    repeatType: "reverse",
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  // rotateY: {
                  //   duration: 13,
                  //   // repeatType: "reverse",
                  //   repeat: Infinity,
                  //   ease: "linear",
                  // },
                }}
              ></motion.div>
              <motion.div
                className="h-64 w-112 bg-cyan-400/90  border-3 border-cyan-400 shadow-[0_0_25px_#22D3EE] rounded-t-full rounded-b-xl"
                initial={{ scaleY: 1, scaleX: 0.9 }}
                animate={{ scaleY: 1.1, scaleX: 0.8 }}
                transition={{
                  duration: 3,
                  repeatType: "reverse",
                  repeat: Infinity,
                  ease: "easeInOut",

                  // rotateY: {
                  //   duration: 13,
                  //   repeat: Infinity,
                  //   ease: "linear",
                  // },
                }}
              ></motion.div>
            </div>
          </motion.div>
          <motion.div
            className="absolute right-24 h-38 w-38 border-2 border-blue-400/40  rounded-full"
            key={`1${section2Visible ? "visible" : "not-visible"}`}
            initial={{ bottom: -200, scale: 1, opacity: 100 }}
            animate={{ bottom: 1000, scale: 1.5, opacity: 0 }}
            transition={{
              duration: 8,
              repeatType: "loop",
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.2,
            }}
          ></motion.div>
          <motion.div
            className="absolute right-72 h-38 w-38 border-2 border-blue-400/40  rounded-full"
            key={`2${section2Visible ? "visible" : "not-visible"}`}
            initial={{ bottom: -300, scale: 0.5, opacity: 100 }}
            animate={{ bottom: 1100, scale: 0.8, opacity: 0 }}
            transition={{
              duration: 7,
              repeatType: "loop",
              repeat: Infinity,
              ease: "easeOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute left-24 h-38 w-38 border-2 border-blue-400/40  rounded-full"
            key={`3${section2Visible ? "visible" : "not-visible"}`}
            initial={{ bottom: -600, scale: 1.5, opacity: 100 }}
            animate={{ bottom: 1100, scale: 1.8, opacity: 0 }}
            transition={{
              duration: 9,
              repeatType: "loop",
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.5,
            }}
          ></motion.div>
          <motion.div
            className="absolute left-122 h-38 w-38 border-2 border-blue-400/40  rounded-full"
            key={`4${section2Visible ? "visible" : "not-visible"}`}
            initial={{ bottom: -400, scale: 0.7, opacity: 100 }}
            animate={{ bottom: 1100, scale: 1, opacity: 0 }}
            transition={{
              duration: 7.5,
              repeatType: "loop",
              repeat: Infinity,
              ease: "easeOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute left-240 h-38 w-38 border-2 border-blue-400/40  rounded-full"
            key={`5${section2Visible ? "visible" : "not-visible"}`}
            initial={{ bottom: -1000, scale: 1.8, opacity: 100 }}
            animate={{ bottom: 1100, scale: 2, opacity: 0 }}
            transition={{
              duration: 9,
              repeatType: "loop",
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.5,
            }}
          ></motion.div>
        </section>
        <section
          ref={section3Ref}
          className="h-screen w-screen relative bg-black snap-center"
        >
          <motion.div
            className="absolute inset-0 h-full w-full z-20
              bg-[linear-gradient(to_right,#a855f720_1px,transparent_1px),linear-gradient(to_bottom,#a855f720_1px,transparent_1px)] 
              bg-[size:50px_50px]
              [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%),linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
              [mask-composite:intersect]
              [mask-size:100%_85%]
              [mask-repeat:no-repeat]
              [mask-position:50%_70%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: containerRef, amount: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              // repeat: Infinity,
            }}
          ></motion.div>
          <motion.div
            className="absolute w-screen h-screen [background:radial-gradient(ellipse_120%_120%_at_50%_55%,rgba(168,85,247,0.3)_0%,black_60%)] z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: containerRef, amount: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              // repeat: Infinity,
              // delay: 0.5,
            }}
          ></motion.div>
          <motion.div
            className="flex flex-col relative gap-24 items-center w-full z-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: containerRef, amount: 1, once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
              // repeat: Infinity,
              // delay: 0.8,
            }}
          >
            <div className="mt-44 flex flex-col items-center relative gap-18">
              <div className="relative">
                <div className="group">
                  <div className="flex justify-center items-center w-24 h-24 bg-[#491275] rounded-full border-4 border-[#A855F7] shadow-[0_0_25px_#A855F7] hover:scale-110 transition-transform duration-300 ease-out">
                    <p className="font-Zrnic text-white text-5xl">1</p>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[130%] w-144 flex items-center p-4 bg-[#101626] border-2 border-[#7F22E360] opacity-0 rounded-lg group-hover:opacity-100 group-hover:left-[150%] pointer-events-none transition-all duration-400 ease-out">
                    <p className="font-Exo2 text-white text-lg">
                      Established the core principles of software engineering by
                      mastering Java for object-oriented logic and building
                      responsive, interactive user interfaces with HTML, CSS,
                      and vanilla JavaScript
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="group">
                  <div className="flex justify-center items-center w-24 h-24 bg-[#491275] rounded-full border-4 border-[#A855F7] shadow-[0_0_25px_#A855F7] hover:scale-110 transition-transform duration-300 ease-out">
                    <p className="font-Zrnic text-white text-5xl">2</p>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-[130%] w-144 flex items-center p-4 bg-[#101626] border-2 border-[#7F22E360] opacity-0 rounded-lg group-hover:opacity-100 group-hover:right-[150%] pointer-events-none transition-all duration-400 ease-out">
                    <p className="font-Exo2 text-white text-lg">
                      Pivoted to modern component architecture by adopting React
                      for building highly performant Single-Page Applications
                      (SPAs) and expanding my algorithmic toolkit with Python
                      for backend logic and data processing
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="group">
                  <div className="flex justify-center items-center w-24 h-24 bg-[#491275] rounded-full border-4 border-[#A855F7] shadow-[0_0_25px_#A855F7] hover:scale-110 transition-transform duration-300 ease-out">
                    <p className="font-Zrnic text-white text-5xl">3</p>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[130%] w-144 flex items-center p-4 bg-[#101626] border-2 border-[#7F22E360] opacity-0 rounded-lg group-hover:opacity-100 group-hover:left-[150%] pointer-events-none transition-all duration-400 ease-out">
                    <p className="font-Exo2 text-white text-lg">
                      Completed the full-stack loop by gaining proficiency in
                      server-side development (Node.js), implementing robust
                      data modeling and persistence with PostgreSQL/SQL, and
                      integrating scalable solutions through API calls
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="group">
                  <div className="flex justify-center items-center w-24 h-24 bg-[#491275] rounded-full border-4 border-[#A855F7] shadow-[0_0_25px_#A855F7] hover:scale-110 transition-transform duration-300 ease-out">
                    <p className="font-Zrnic text-white text-5xl">4</p>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-[130%] w-144 flex items-center p-4 bg-[#101626] border-2 border-[#7F22E360] opacity-0 rounded-lg group-hover:opacity-100 group-hover:right-[150%] pointer-events-none transition-all duration-400 ease-out">
                    <p className="font-Exo2 text-white text-lg">
                      Currently focused on advancing next-level user experience
                      (UX) using Tailwind CSS, fully responsive design, Framer
                      Motion, and Three.js, while continuously learning to
                      refine code quality and maintainability through advanced
                      TypeScript practices
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-purple-400/50 font-Exo2 text-lg">
                Hover to Reveal Node Details
              </div>
              <div className="absolute -top-6 h-170 border-l-4 border-[#A855F7] -z-10"></div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-0 w-full h-2/5 bg-gradient-to-b from-blue-950 to-black opacity-60"
            key={scrollDirection}
            initial={
              scrollDirection === "down" ? { opacity: 0.6 } : { opacity: 0 }
            }
            whileInView={{ opacity: 0 }}
            viewport={{ root: containerRef, amount: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "reverse",
              delay: 0.3,
            }}
          ></motion.div>
        </section>
        <section
          ref={section4Ref}
          className="flex justify-center items-center h-screen w-screen relative [background:radial-gradient(ellipse_250%_100%_at_50%_50%,#0B2F2F_0%,black_60%)] snap-center"
        >
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(45,212,191,0.03)_2px,rgba(45,212,191,0.03)_4px)]" />
          <div className="absolute mt-16 w-[80%] h-[60%] pointer-events-none overflow-hidden z-10">
            <Canvas
              style={{
                position: "relative",
                pointerEvents: "none",
                height: "100vh",
                width: "100vw",
              }}
            >
              {groupedRefs.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {group.map((ref, index) => (
                    <View track={ref} key={`${groupIndex}-${index}`}>
                      <ambientLight intensity={0.8} />
                      <RotatingWorks
                        hovered={indexHovered === `${groupIndex}${index}`}
                      />
                      <PerspectiveCamera
                        makeDefault
                        position={[0.5, 0, 5]}
                        fov={75}
                      />
                    </View>
                  ))}
                </React.Fragment>
              ))}
            </Canvas>
          </div>
          <div
            className={`mt-16 relative overflow-y-scroll w-[80%] h-[60%] border-3 border-teal-500 rounded-xl bg-black/30 shadow-[0_0_25px_#22D3EE] snap-y snap-mandatory ${
              section4AllowHover ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {groupedWorks.map((works, index) => (
              <WorkCard
                key={index}
                works={works}
                divRefs={groupedRefs[index]}
                groupIndex={index}
                hoverSetter={setIndexHovered}
              />
            ))}
          </div>
        </section>
        <section
          ref={section5Ref}
          className="flex justify-center items-center h-screen w-screen relative [background:radial-gradient(ellipse_100%_120%_at_10%_53%,#B37800_0%,black_40%)] snap-center"
        >
          <div ref={wireframeRef} className="flex-1 h-full w-full"></div>
          <div className="flex-2 h-full w-full">
            <div className="flex h-full flex-col gap-6 -ml-10 items-center justify-center">
              <div className="w-180 border-2 p-6 border-[#364153]">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center p-3 border-2 border-[#364153]">
                    <FontAwesomeIcon
                      className="text-yellow-400 text-3xl"
                      icon={faPaperPlane}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="font-Exo2 font-bold text-xl">
                      Let's connect! Feel free to reach out for collaborations
                      or project inquiries
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-120 border-2 p-6 border-[#364153] group hover:border-yellow-400 hover:shadow-[0_0_25px_#FACC15] transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center p-2 border-2 border-[#364153] group-hover:border-yellow-400 duration-300">
                    <FontAwesomeIcon
                      className="text-yellow-400 text-3xl"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="font-Exo2 font-bold">Email</p>
                    <p className="font-Exo2">jaredleonano.3@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="w-120 border-2 p-6 border-[#364153] group hover:border-yellow-400 hover:shadow-[0_0_25px_#FACC15] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center p-2 border-2 border-[#364153] group-hover:border-yellow-400 duration-300">
                    <FontAwesomeIcon
                      className="text-yellow-400 text-3xl"
                      icon={faGithub}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="font-Exo2 font-bold">Github</p>
                    <p className="font-Exo2">github.com/JaredKyleLeonano</p>
                  </div>
                </div>
              </div>
              <div className="w-120 border-2 p-6 border-[#364153] group hover:border-yellow-400 hover:shadow-[0_0_25px_#FACC15] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center p-2 border-2 border-[#364153] group-hover:border-yellow-400 duration-300">
                    <FontAwesomeIcon
                      className="text-yellow-400 text-3xl"
                      icon={faLinkedin}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="font-Exo2 font-bold">LinkedIn</p>
                    <p className="font-Exo2">linkedin.com/in/jared-leonano/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
