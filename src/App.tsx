import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLayoutEffect } from "react";
import { Toaster } from "sonner";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import History from "./pages/History";
import Works from "./pages/Works";
import ContactMe from "./pages/ContactMe";
import Links from "./pages/Links";
import Header from "./components/Header";
import CanvasContainer from "./components/CanvasContainer";
import CompiledWorks from "./components/CompiledWorks";

const getBreakpoint = () => {
  if (window.matchMedia("(min-width: 1536px)").matches) {
    return "2xl";
  } else if (window.matchMedia("(min-width: 1280px)").matches) {
    return "xl";
  } else if (window.matchMedia("(min-width: 1024px)").matches) {
    return "lg";
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    return "md";
  } else if (window.matchMedia("(min-width: 640px)").matches) {
    return "sm";
  } else {
    return "xs"; // optional: below 640px
  }
};

function App() {
  const [mobile, setMobile] = useState(getBreakpoint);

  useEffect(() => {
    function handleResize() {
      setMobile(getBreakpoint);
    }

    handleResize();

    console.log("SIZE IS CURRENTLY:", mobile);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedWorks = [];

  const groupCondition =
    mobile == "xs" || mobile == "sm" || mobile == "md" || mobile == "lg"
      ? 2
      : 4;

  for (let i = 0; i < CompiledWorks.length; i += groupCondition) {
    groupedWorks.push(CompiledWorks.slice(i, i + groupCondition));
  }

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const wireframeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const section1Visible = useInView(section1Ref, { amount: 0.3 });
  const section2Visible = useInView(section2Ref, { amount: 0.3 });
  const section3Visible = useInView(section3Ref, { amount: 0.3 });
  const section4Visible = useInView(section4Ref, { amount: 0.3 });
  const section5Visible = useInView(section5Ref, { amount: 0.3 });
  const section6Visible = useInView(section6Ref, { amount: 0.3 });

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      if (Math.abs(currentScrollY - lastScrollY.current) > 0.1) {
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
          console.log("Scrolling Down");
        } else if (currentScrollY < lastScrollY.current) {
          setScrollDirection("up");
          console.log("Scrolling Up");
        }
      }

      lastScrollY.current = currentScrollY;
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  let headerText = "default";
  if (section6Visible) {
    headerText = "Links";
  } else if (section5Visible) {
    headerText = "Contact";
  } else if (section4Visible) {
    headerText = "Works";
  } else if (section3Visible) {
    headerText = "History";
  } else if (section2Visible) {
    headerText = "About Me";
  } else if (section1Visible) {
    headerText = "Leonano";
  }

  useEffect(() => {
    console.log("Section 1 Visible:", section1Visible);
    console.log("Section 2 Visible:", section2Visible);
    console.log("Section 3 Visible:", section3Visible);
    console.log("Section 4 Visible:", section4Visible);
  }, [section1Visible, section2Visible, section3Visible, section4Visible]);

  return (
    <div
      ref={containerRef}
      className="h-svh overflow-y-scroll overflow-x-clip snap-y snap-mandatory z-20"
    >
      <Toaster theme="dark" position="bottom-right" richColors />
      <Header
        headerText={headerText}
        scrollDirection={scrollDirection}
      ></Header>

      <CanvasContainer
        sectionRef={section1Ref}
        wireframeRef={wireframeRef}
        viewport={mobile}
      ></CanvasContainer>

      <LandingPage sectionRef={section1Ref}></LandingPage>

      <AboutMe
        containerRef={containerRef}
        sectionRef={section2Ref}
        sectionVisible={section2Visible}
      ></AboutMe>

      <History
        containerRef={containerRef}
        sectionRef={section3Ref}
        scrollDirection={scrollDirection}
        viewport={mobile}
      ></History>

      <Works
        sectionRef={section4Ref}
        groupedWorks={groupedWorks}
        viewport={mobile}
      ></Works>

      <ContactMe sectionRef={section5Ref} globeRef={wireframeRef}></ContactMe>

      <Links sectionRef={section6Ref}></Links>
    </div>
  );
}

export default App;
