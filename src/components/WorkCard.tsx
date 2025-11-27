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
  viewport: string;
};

const WorkCard = ({ works, viewport }: workCardProps) => {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-6 snap-start overflow-hidden z-20 p-2 md:p-8">
      <div className="h-full w-full flex flex-wrap items-center justify-between md:justify-center md:gap-6 ">
        {works.map((work, index) => {
          const isLinkValid = work.link !== "none";
          const statusCondition = work.status === "Completed";
          return (
            <a
              href={isLinkValid ? work.link : undefined}
              rel="external"
              target="_blank"
              key={`${index}`}
              className={`xl:w-[44%] 2xl:w-[48%] h-[47%] xl:h-[47%] flex justify-between bg-teal-950/50 border-2 border-[#084548] hover:border-[#148e94] transition-all duration-300 ease-out snap-center group rounded ${
                isLinkValid ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              <div className="flex flex-col w-full h-full flex-4 justify-between p-4">
                <div className="flex flex-col h-full gap-4">
                  <div className="flex justify-between">
                    <p className="font-Zrnic text-teal-500 text-xl md:text-3xl">
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
                        } text-xs md:text-base`}
                      >
                        {work.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-full gap-6">
                    <div className="flex flex-col flex-3 h-full justify-between">
                      <p className="font-Exo2 text-gray-300 text-sm md:text-lg 2xl:text-base">
                        {work.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {work.techStack.map((tech: string, index: number) => (
                          <div
                            key={index}
                            className="flex justify-center items-center bg-[#062126] border-1 border-[#044d4c] rounded"
                          >
                            <div className="p-1 text-xs md:text-sm 2xl:text-xs text-teal-500">
                              {tech}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {!(
                      viewport == "xs" ||
                      viewport == "sm" ||
                      viewport == "md"
                    ) && (
                      <div className="flex-2 flex h-full items-center justify-center">
                        <img
                          src={work.img}
                          className="w-full max-h-34 object-cover opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out rounded"
                        ></img>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
