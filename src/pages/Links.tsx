import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { toast } from "sonner";

const Links = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const linkDetails = [
    {
      name: "EMAIL",
      icon: faEnvelope,
      description: "jaredleonano.3\u200B@gmail.com",
      link: "#",
    },
    {
      name: "GITHUB",
      icon: faGithub,
      description: "github.com/\u200BJaredKyleLeonano",
      link: "https://github.com/JaredKyleLeonano",
    },
    {
      name: "LINKEDIN",
      icon: faLinkedin,
      description: "linkedin.com/in/\u200Bjared-leonano/",
      link: "https://www.linkedin.com/in/jared-leonano/",
    },
    {
      name: "RESUME",
      icon: faFileAlt,
      description: "Download Cv",
      link: "/assets/files/Leonano Resume.pdf",
    },
  ];
  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center h-[100dvh] w-screen relative bg-linear-to-b from-black to-[#1a1a1a] to-20% snap-center"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(45,212,191,0.03)_2px,rgba(45,212,191,0.03)_4px)]" />
      <div className="flex h-full flex-col w-full items-center justify-center  px-4 pt-12 gap-8 md:gap-24 lg:px-24 xl:px-64 xl:gap-16">
        <div className="text-[#d1d5dc] font-Zrnic text-4xl md:text-6xl lg:text-7xl">
          Find Me Online
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {linkDetails.map((link, index) => (
            <a
              href={link.link}
              target={`${index == 0 ? "_self" : "_blank"}`}
              onClick={() => {
                if (index === 0) {
                  navigator.clipboard.writeText("jaredleonano.3@gmail.com");
                  toast.info("Email copied to Clipboard");
                }
              }}
              key={index}
              className={`rounded flex-1 border-2 bg-gray-900/30 border-[#364153] group hover:border-[#6a7282] hover:shadow-[0_0_25px_#6a7282] transition-all duration-300 p-4 md:p-6 lg:p-6`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="rounded flex justify-center items-center border-2 bg-[#1f2a3b] border-[#364153] group-hover:border-[#6a7282] duration-300 p-2">
                  <FontAwesomeIcon
                    className="text-[#99a1af] bg-gray-800 group-hover:text-[#d1d5dc] transition-colors duration-300 text-lg md:text-2xl lg:text-3xl"
                    icon={link.icon}
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col items-center text-white">
                  <p className="font-Exo2 font-light text-[#444e5d] text-xs md:text-lg lg:text-base">
                    {link.name}
                  </p>
                  <p className="font-Exo2 break-words text-center text-[#99a1af] group-hover:text-[#d1d5dc] transition-colors duration-300 text-xs md:text-lg lg:text-base">
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <hr className="w-full text-[#1d2837]"></hr>
          <p className="text-[#4a5565] font-Exo2 text-xs md:text-lg lg:text-base">
            © 2025 LEONANO
          </p>
        </div>
      </div>
    </section>
  );
};

export default Links;
