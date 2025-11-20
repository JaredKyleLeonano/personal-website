import React from "react";

type WorkDetails = {
  title: string;
  description: string;
  status: string;
  techStack: string[];
  link: string;
  img: string;
};

type workCardProps = {
  works: WorkDetails[];
};

const WorkCard = ({ works }: workCardProps) => {
  // console.log("RECEIVED REF IN WORKCARD:", ref);
  return (
    <div className="h-full w-full p-8 flex flex-col justify-between items-center gap-6 snap-start overflow-hidden z-20">
      <div className="h-full w-full flex flex-wrap items-center justify-center gap-6">
        {works.map((work, index) => {
          const isLinkValid = work.link !== "none";
          const statusCondition = work.status === "Completed";
          return (
            <a
              href={isLinkValid ? work.link : undefined}
              rel="external"
              target="_blank"
              key={`${index}`}
              className={`w-[49%] h-[45%] flex justify-between bg-teal-950/50 border-2 border-[#084548] hover:border-[#148e94] transition-all duration-300 ease-out snap-center group rounded ${
                isLinkValid ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              <div className="flex flex-col h-full flex-4 justify-between p-4">
                <div className="flex flex-col h-full gap-4">
                  <div className="flex justify-between">
                    <p className="font-Zrnic text-teal-500 text-3xl">
                      {work.title}
                    </p>
                    <div
                      className={`flex w-fit justify-center items-center  border-1 ${
                        statusCondition
                          ? "bg-emerald-500/20 border-emerald-500/50"
                          : "bg-yellow-300/20 border-yellow-300/50"
                      } rounded`}
                    >
                      <p
                        className={`py-1 px-0.5 font-Exo2 ${
                          statusCondition
                            ? "text-emerald-400"
                            : "text-yellow-300"
                        }`}
                      >
                        {work.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-full gap-6">
                    <div className="flex flex-col flex-3 h-full justify-between">
                      <p className="font-Exo2 text-gray-300 text-large">
                        {work.description}
                      </p>
                      <div className="flex gap-2">
                        {work.techStack.map((tech: string, index: number) => (
                          <div
                            key={index}
                            className="flex justify-center items-center bg-[#062126] border-1 border-[#044d4c] rounded"
                          >
                            <p className="p-1 text-sm text-teal-500">{tech}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-2 flex">
                      <img
                        src={work.img}
                        className="w-full h-full object-cover opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out rounded"
                      ></img>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-2">
                  {work.techStack.map((tech: string, index: number) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-[#062126] border-1 border-[#044d4c]"
                    >
                      <p className="p-1 text-md text-teal-500">{tech}</p>
                    </div>
                  ))}
                </div> */}
              </div>
              {/* <div className="h-full flex flex-col items-end flex-2 p-4 gap-2">
                <div className="flex w-fit justify-center items-center bg-emerald-500/20  border-1 border-emerald-500/50">
                  <p className="py-1 px-0.5 font-Exo2 text-emerald-400">
                    {work.status}
                  </p>
                </div>
                <div
                  ref={ref}
                  className="h-full w-full flex justify-center items-center"
                >
                  <img
                    src="public\assets\images\abletonClone.jpg"
                    className="h-full w-full object-cover"
                  ></img>
                </div>
              </div> */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
