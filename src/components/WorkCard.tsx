import React from "react";

type WorkDetails = {
  title: string;
  description: string;
  status: string;
  techStack: string[];
};

type workCardProps = {
  works: WorkDetails[];
  divRefs: React.RefObject<HTMLDivElement | null>[];
  groupIndex: number;
  hoverSetter: (id: string | null) => void;
};

const WorkCard = ({
  works,
  divRefs,
  groupIndex,
  hoverSetter,
}: workCardProps) => {
  // console.log("RECEIVED REF IN WORKCARD:", ref);
  return (
    <div className="h-full w-full p-8 flex flex-col justify-between items-center gap-6 snap-start overflow-hidden z-20">
      <div className="h-full w-full flex flex-wrap items-center justify-center gap-6">
        {works.map((work, index) => {
          const ref = divRefs[index];
          return (
            <div
              key={`${groupIndex}${index}`}
              className="w-[49%] h-[45%] flex justify-between bg-teal-950/50 border-2 border-[#084548] hover:border-[#148e94] transition-all duration-300 ease-out snap-center"
              onMouseEnter={() => hoverSetter(`${groupIndex}${index}`)}
              onMouseLeave={() => hoverSetter(null)}
            >
              <div className="flex flex-col h-full flex-4 justify-between p-4">
                <div className="flex flex-col gap-6">
                  <p className="font-Zrnic text-teal-500 text-3xl">
                    {work.title}
                  </p>
                  <p className="font-Exo2 text-gray-300 text-xl">
                    {work.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {work.techStack.map((tech: string, index: number) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-[#062126] border-1 border-[#044d4c]"
                    >
                      <p className="p-1 text-md text-teal-500">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-full flex flex-col items-end flex-1 p-2 gap-6">
                <div className="flex w-fit justify-center items-center bg-emerald-500/20  border-1 border-emerald-500/50">
                  <p className="py-1 px-0.5 font-Exo2 text-emerald-400">
                    {work.status}
                  </p>
                </div>
                <div
                  ref={ref}
                  className="h-full w-full flex justify-center items-center"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
