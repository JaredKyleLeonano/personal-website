import AboutMe from "./AboutMe";
import History from "./History";
import { motion } from "framer-motion";

const Transition = ({
  containerRef,
  section2Ref,
  section3Ref,
  scrollDirection,
  viewport,
  transitionCondition,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  section2Ref: React.RefObject<HTMLDivElement | null>;
  section3Ref: React.RefObject<HTMLDivElement | null>;
  scrollDirection: string;
  section2Visible: boolean;
  viewport: string;
  transitionCondition: boolean;
}) => {
  return (
    <div className="relative">
      <AboutMe
        containerRef={containerRef}
        sectionRef={section2Ref}
        sectionVisible={transitionCondition}
      ></AboutMe>

      <div className="absolute w-full h-1/5 top-height-spacing flex -translate-y-1/2 flex-col z-10">
        <motion.div
          className=" w-full flex-1 bg-gradient-to-t from-blue-950 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: transitionCondition ? 0.6 : 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ root: containerRef, amount: 1 }}
        ></motion.div>
        <motion.div
          className=" w-full flex-1 bg-gradient-to-b from-blue-950 to-transparent z-30"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: transitionCondition ? 0.6 : 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ root: containerRef, amount: 1 }}
        ></motion.div>
      </div>

      <History
        containerRef={containerRef}
        sectionRef={section3Ref}
        scrollDirection={scrollDirection}
        viewport={viewport}
      ></History>
    </div>
  );
};

export default Transition;
