const LandingPage = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center flex-col h-dvh w-screen bg-radial from-[#32042F] to-black snap-start"
    >
      <div className="absolute h-full w-full"></div>
      <div className="flex items-center h-full text-white">
        <div className="-translate-y-1/2 flex flex-col items-center">
          <h1 className=" font-Zrnic text-4xl md:text-7xl 2xl:text-8xl">
            Full Stack Developer
          </h1>
          <h2 className=" font-Exo2 text-md sm:text-xl xl:text-3xl">
            Aspiring Developer with Front End Proficiency
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
