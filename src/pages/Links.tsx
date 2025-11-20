import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Links = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center h-screen w-screen relative bg-linear-to-b from-black to-[#1a1a1a] to-20% snap-center"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(45,212,191,0.03)_2px,rgba(45,212,191,0.03)_4px)]" />
      <div className="flex h-full flex-col w-full items-center justify-center px-64 gap-16">
        <div className="text-[#d1d5dc] text-7xl font-Zrnic">Find Me Online</div>
        <div className="flex w-full gap-8">
          <div className="flex-1 border-2 p-6 bg-gray-900/30 border-[#364153] group hover:border-[#6a7282] hover:shadow-[0_0_25px_#6a7282] transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border-2 bg-[#1f2a3b] border-[#364153] group-hover:border-[#6a7282] duration-300">
                <FontAwesomeIcon
                  className="text-[#99a1af] bg-gray-800 text-3xl group-hover:text-[#d1d5dc] transition-colors duration-300"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </div>
              <div className="flex flex-col items-center text-white">
                <p className="font-Exo2 font-light text-[#444e5d]">EMAIl</p>
                <p className="font-Exo2 text-[#99a1af] group-hover:text-[#d1d5dc] transition-colors duration-300">
                  jaredleonano.3@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 border-2 p-6 bg-gray-900/30 border-[#364153] group hover:border-[#6a7282] hover:shadow-[0_0_25px_#6a7282] transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border-2 bg-gray-800 border-[#364153] group-hover:border-[#6a7282] duration-300">
                <FontAwesomeIcon
                  className="text-[#99a1af] group-hover:text-[#d1d5dc]  text-3xl transition-colors duration-300"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </div>
              <div className="flex flex-col items-center text-white">
                <p className="font-Exo2 font-light text-[#444e5d]">GITHUB</p>
                <p className="font-Exo2 text-[#99a1af] group-hover:text-[#d1d5dc] transition-colors duration-300">
                  github.com/JaredKyleLeonano
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 border-2 p-6 bg-gray-900/30 border-[#364153] group hover:border-[#6a7282] hover:shadow-[0_0_25px_#6a7282] transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border-2 bg-gray-800 border-[#364153] group-hover:border-[#6a7282] duration-300">
                <FontAwesomeIcon
                  className="text-[#99a1af] group-hover:text-[#d1d5dc] text-3xl transition-colors duration-300"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </div>
              <div className="flex flex-col items-center text-white">
                <p className="font-Exo2 font-light text-[#444e5d]">LINKEDIN</p>
                <p className="font-Exo2 text-[#99a1af] group-hover:text-[#d1d5dc] transition-colors duration-300">
                  linkedin.com/in/jared-leonano/
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 border-2 p-6 bg-gray-900/30 border-[#364153] group hover:border-[#6a7282] hover:shadow-[0_0_25px_#6a7282] transition-all duration-300">
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border-2 bg-gray-800 border-[#364153] group-hover:border-[#6a7282] duration-300">
                <FontAwesomeIcon
                  className="text-[#99a1af] group-hover:text-[#d1d5dc] text-3xl transition-colors duration-300"
                  icon={faFileAlt}
                ></FontAwesomeIcon>
              </div>
              <div className="flex flex-col items-center text-white">
                <p className="font-Exo2 font-light text-[#444e5d]">RESUME</p>
                <p className="font-Exo2 text-[#99a1af] group-hover:text-[#d1d5dc] transition-colors duration-300">
                  Download CV
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <hr className="w-full text-[#1d2837]"></hr>
          <p className="text-[#4a5565] font-Exo2">© 2025 LEONANO</p>
        </div>
      </div>
    </section>
  );
};

export default Links;
