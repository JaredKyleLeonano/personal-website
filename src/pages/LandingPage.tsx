const LandingPage = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center flex-col h-screen w-screen bg-radial from-[#32042F] to-black snap-start"
    >
      <div className="absolute h-full w-full"></div>
      <div className="flex items-center h-full text-white">
        <div className="-translate-y-1/2 flex flex-col items-center">
          <h1 className="text-8xl font-Zrnic">Full Stack Developer</h1>
          <h2 className="text-3xl font-Exo2">
            Aspiring Developer with Front End Proficiency
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
