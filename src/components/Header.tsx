import { motion, AnimatePresence } from "framer-motion";
const Header = ({
  headerText,
  scrollDirection,
}: {
  headerText: string;
  scrollDirection: string;
}) => {
  return (
    <div className="fixed w-full top-16 z-30">
      <div className="flex justify-center items-center w-full ">
        <hr className="w-full h-[1px] bg-gradient-to-l from-white from-50% to-transparent border-0"></hr>
        <AnimatePresence mode="wait">
          <motion.h2
            className="mx-16 w-112 whitespace-nowrap font-Exo2 text-center text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl"
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
  );
};

export default Header;
