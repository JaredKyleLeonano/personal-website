import { motion } from "framer-motion";

const History = ({
  containerRef,
  sectionRef,
  scrollDirection,
  viewport,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  scrollDirection: string;
  viewport: string;
}) => {
  const descriptions = [
    "Established the core principles of software engineering by mastering Java for object-oriented logic and building responsive, interactive user interfaces with HTML, CSS, and vanilla JavaScript",
    "Pivoted to modern component architecture by adopting React for building highly performant Single-Page Applications (SPAs) and expanding my algorithmic toolkit with Python for backend logic and data processing",
    "Completed the full-stack loop by gaining proficiency in server-side development (Node.js), implementing robust data modeling and persistence with PostgreSQL/SQL, and integrating scalable solutions through API calls",
    "Currently focused on advancing next-level user experience (UX) using Tailwind CSS, fully responsive design, Framer Motion, and Three.js, while continuously learning to refine code quality and maintainability through advanced TypeScript practices",
  ];
  return (
    <section
      ref={sectionRef}
      className="h-[100dvh] w-screen relative flex flex-col justify-center gap-6 bg-black snap-center"
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
        }}
      ></motion.div>

      <div className="flex h-5/6 pt-24 flex-col justify-between px-8 md:px-16 md:pb-8">
        <motion.div
          className={`flex flex-col relative gap-24 w-full z-30 ${
            viewport == "xs" || viewport == "sm" || viewport == "md"
              ? "items-start"
              : "items-center"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: containerRef, amount: 1, once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="flex flex-col items-center relative gap-10 md:gap-18">
            {descriptions.map((description, index) => (
              <div key={index} className="relative">
                <button className="group">
                  <div className="flex justify-center items-center peer bg-[#491275] rounded-full border-4 border-[#A855F7] shadow-[0_0_25px_#A855F7] hover:scale-110 transition-transform duration-300 ease-out w-18 h-18 md:w-24 md:h-24">
                    <p className="font-Zrnic text-white text-3xl md:text-5xl">
                      {index + 1}
                    </p>
                  </div>
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-56 md:w-120 lg:w-84 xl:w-120 flex items-center p-4 bg-[#101626] border-2 border-[#7F22E360] opacity-0 rounded-lg group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-all duration-400 ease-out 
                      ${
                        viewport == "xs" || viewport == "sm" || viewport == "md"
                          ? "left-[100%] group-focus:left-[120%]"
                          : `${
                              index % 2
                                ? "left-[130%] group-hover:left-[150%]"
                                : "right-[130%] group-hover:right-[150%]"
                            }`
                      }`}
                  >
                    <p className="font-Exo2 text-white text-xs md:text-lg ">
                      {description}
                    </p>
                  </div>
                </button>
              </div>
            ))}
            <div className="absolute -top-6 h-full p-[2px] bg-gradient-to-b from-transparent from-0% to-[#A855F7] to-10% -z-10"></div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 w-full h-2/5 bg-gradient-to-b from-blue-950 to-black opacity-60"
        key={scrollDirection}
        initial={scrollDirection === "down" ? { opacity: 0.6 } : { opacity: 0 }}
        whileInView={{ opacity: 0 }}
        viewport={{ root: containerRef, amount: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.3,
        }}
      ></motion.div>
      <div className="absolute w-full text-purple-400/50 font-Exo2 text-lg bottom-4 mt-12 md:mt-2 md:bottom-16 md:text-2xl text-center">
        {viewport == "xs" || viewport == "sm" || viewport == "md"
          ? "Click to Reveal Node Details"
          : "Hover to Reveal Node Details"}
      </div>
    </section>
  );
};

export default History;
