import WorkCard from "../components/WorkCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";

interface Work {
  title: string;
  description: string;
  status: string;
  techStack: string[];
  link: string;
  img: string;
}

const Works = ({
  sectionRef,
  groupedWorks,
  viewport,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  groupedWorks: Work[][];
  viewport: string;
}) => {
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const [viewedGroup, setViewedGroup] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setViewedGroup(Number(entry.target.id));
          }
        });
      },
      { root: worksContainerRef.current, threshold: 0.5 }
    );

    const items = document.querySelectorAll(".watched-group");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollNext = () => {
    if (viewport == "xs" || viewport == "sm" || viewport == "md") {
      worksContainerRef.current?.scrollBy({
        left: window.innerHeight / 2,
        behavior: "smooth",
      });
    } else {
      worksContainerRef.current?.scrollBy({
        top: window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollPrevious = () => {
    if (viewport == "xs" || viewport == "sm" || viewport == "md") {
      worksContainerRef.current?.scrollBy({
        left: -window.innerHeight / 2,
        behavior: "smooth",
      });
    } else {
      worksContainerRef.current?.scrollBy({
        top: -window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center full-height-fix w-screen relative [background:radial-gradient(ellipse_250%_100%_at_50%_50%,#0B2F2F_0%,black_60%)] snap-center"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(45,212,191,0.03)_2px,rgba(45,212,191,0.03)_4px)]" />
      {/*relative mt-16 border-3 border-teal-500 rounded-xl bg-black/30 shadow-[0_0_25px_#22D3EE] */}
      <div className="relative mt-16 border-3 border-teal-500 rounded-xl bg-black/30 shadow-[0_0_25px_#22D3EE] h-[60%] w-[80%]">
        <div
          ref={worksContainerRef}
          className="flex lg:block overflow-auto h-full w-full snap-x lg:snap-y snap-mandatory"
        >
          {groupedWorks.map((works, index) => (
            <WorkCard key={index} index={index} works={works} />
          ))}
        </div>
        <div className="absolute flex justify-center items-center z-20 h-full lg:w-full bottom-0 -right-[9%] lg:-bottom-[8%] lg:right-0 lg:h-auto  ">
          <button
            className={`w-4 h-4 flex justify-center cursor-pointer transition-opacity duration-150 ease-out ${
              viewedGroup != groupedWorks.length - 1
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={scrollNext}
          >
            <FontAwesomeIcon
              className="text-teal-500 -rotate-90 lg:rotate-0 lg:text-2xl"
              icon={faAngleDown}
            ></FontAwesomeIcon>
          </button>
        </div>

        <div className="absolute flex justify-center items-center z-20 h-full lg:w-full top-0 -left-[9%] lg:-top-[8%] lg:left-0 lg:h-auto  ">
          <button
            className={`w-4 h-4 flex justify-center cursor-pointer transition-opacity duration-150 ease-out ${
              viewedGroup != 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={scrollPrevious}
          >
            <FontAwesomeIcon
              className="text-teal-500 -rotate-90 lg:rotate-0 lg:text-2xl"
              icon={faAngleUp}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
