import { motion } from "framer-motion";

const AboutMe = ({
  containerRef,
  sectionRef,
  sectionVisible,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  sectionVisible: boolean;
}) => {
  return (
    <section
      ref={sectionRef}
      className="h-[100dvh] w-screen relative flex justify-center bg-black snap-center overflow-clip"
    >
      <motion.div
        className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-blue-950 to-black"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: sectionVisible ? 0.6 : 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
        viewport={{ root: containerRef, amount: 1 }}
      ></motion.div>
      <motion.div
        className="h-full pt-16 items-center w-4/5 xl:w-6/7 2xl:w-4/5 absolute flex flex-col-reverse justify-center text-white font-Exo2 text-sm gap-8 md:text-2xl xl:flex-row lg:gap-16 2xl:text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: containerRef, amount: 0.5, once: true }} //og value 0.5
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="flex flex-col w-full gap-4 lg:gap-16">
          <p className="leading-loose text-center lg:text-left">
            I'm a passionate{" "}
            <span className="text-cyan-400">full stack developer</span> with
            experience in creating web application. My journey in development
            started with front-end technologies, and I've been expanding my
            expertise to cover full stack development as well.
          </p>
          <hr className="h-full"></hr>
          <div className="flex justify-between whitespace-nowrap text-xs md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl lg:gap-0">
            <div className="flex flex-col gap-2 lg:gap-8">
              <div className="flex flex-col lg:flex-row">
                <p className="font-bold w-20 lg:w-auto">Location:</p>{" "}
                <p className="lg:ml-2">United States</p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="font-bold w-20 lg:w-auto">Focus:</p>{" "}
                <p className="lg:ml-2">Front End Development</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-8">
              <div className="flex flex-col lg:flex-row">
                <p className="font-bold w-20 lg:w-auto">Skills:</p>{" "}
                <p className="lg:ml-2">Full Stack Development</p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="font-bold w-20 lg:w-auto">Experience:</p>{" "}
                <p className="lg:ml-2">4 Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 lg:gap-6">
          <motion.div
            className=" bg-cyan-400/90 border-3 border-cyan-400 shadow-[0_0_25px_#22D3EE]  rounded-full h-16 w-16 md:h-24 md:w-24 xl:h-48 xl:w-48"
            initial={{ y: 0 }}
            animate={{ y: "-1.4vw" }}
            style={{ transformStyle: "preserve-3d" }}
            transition={{
              y: {
                duration: 3,
                repeatType: "reverse",
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          ></motion.div>
          <motion.div
            className=" bg-cyan-400/90  border-3 border-cyan-400 shadow-[0_0_25px_#22D3EE] rounded-t-full rounded-b-xl h-16 w-42 md:h-24 md:w-58 xl:h-64 xl:w-112"
            initial={{ scaleY: 1, scaleX: 0.9 }}
            animate={{ scaleY: 1.1, scaleX: 0.8 }}
            transition={{
              duration: 3,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-24 h-38 w-38 border-2 border-blue-400/40  rounded-full"
        key={`1${sectionVisible ? "visible" : "not-visible"}`}
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
        key={`2${sectionVisible ? "visible" : "not-visible"}`}
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
        key={`3${sectionVisible ? "visible" : "not-visible"}`}
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
        key={`4${sectionVisible ? "visible" : "not-visible"}`}
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
        key={`5${sectionVisible ? "visible" : "not-visible"}`}
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
  );
};

export default AboutMe;
