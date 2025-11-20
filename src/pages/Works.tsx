import WorkCard from "../components/WorkCard";

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
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  groupedWorks: Work[][];
}) => {
  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center h-screen w-screen relative [background:radial-gradient(ellipse_250%_100%_at_50%_50%,#0B2F2F_0%,black_60%)] snap-center"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(45,212,191,0.03)_2px,rgba(45,212,191,0.03)_4px)]" />
      <div className="mt-16 relative overflow-y-scroll w-[80%] h-[60%] border-3 border-teal-500 rounded-xl bg-black/30 shadow-[0_0_25px_#22D3EE] snap-y snap-mandatory">
        {groupedWorks.map((works, index) => (
          <WorkCard key={index} works={works} />
        ))}
      </div>
    </section>
  );
};

export default Works;
