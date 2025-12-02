import { Canvas } from "@react-three/fiber";
import { View, PerspectiveCamera } from "@react-three/drei";
import RotatingSquare from "./RotatingSquare";
import WireframeSphere from "./WireframeSphere";
import { useState, useEffect, useMemo } from "react";
import type { RefObject } from "react";

interface InputType {
  x: number;
  y: number;
  z: number;
  size: number;
}

const CanvasContainer = ({
  sectionRef,
  wireframeRef,
  viewport,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  wireframeRef: React.RefObject<HTMLDivElement | null>;
  viewport: string;
}) => {
  const [squarePositions, setSquarePositions] = useState<InputType[]>([]);
  const [zoom, setZoom] = useState<number>(5);
  const [wireframeCam, setwireFrameCam] = useState<number>(0);

  const xxlPositions = useMemo(
    () => [
      { x: -1, y: -1.5, z: 1.5, size: 0.4 },
      { x: -2, y: -1, z: 1.5, size: 0.5 },
      { x: -4.65, y: 0.55, z: 1.5, size: 0.1 },
      { x: -1.8, y: 1.7, z: 1.5, size: 0.3 },
      { x: 3.7, y: 1.6, z: 1.5, size: 0.2 },
      { x: 4.65, y: -0.2, z: 1.5, size: 0.17 },
      { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
    ],
    []
  );

  const xlPositions = useMemo(
    () => [
      { x: -1, y: -1.9, z: 1.5, size: 0.4 },
      { x: -2.5, y: -1, z: 1.5, size: 0.5 },
      { x: -3.5, y: 0.55, z: 1.5, size: 0.1 },
      { x: -1.8, y: 1.7, z: 1.5, size: 0.3 },
      { x: 3, y: 1.6, z: 1.5, size: 0.2 },
      { x: 3.5, y: -0.2, z: 1.5, size: 0.17 },
      { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
    ],
    []
  );

  const lgPositions = useMemo(
    () => [
      { x: -1, y: -1.9, z: 1.5, size: 0.4 },
      { x: -2.4, y: -1, z: 1.5, size: 0.5 },
      { x: -4.65, y: 0.55, z: 1.5, size: 0.1 },
      { x: -2, y: 1.7, z: 1.5, size: 0.3 },
      { x: 2.5, y: 1.6, z: 1.5, size: 0.2 },
      { x: 4.65, y: -0.2, z: 1.5, size: 0.17 },
      { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
    ],
    []
  );

  const mdPositions = useMemo(
    () => [
      { x: -0.5, y: -1.8, z: 1.5, size: 0.4 },
      { x: -2, y: -1, z: 1.5, size: 0.5 },
      { x: -4.65, y: 0.55, z: 1.5, size: 0.1 },
      { x: -1.8, y: 1.7, z: 1.5, size: 0.3 },
      { x: 1.5, y: 1.6, z: 1.5, size: 0.2 },
      { x: 4.65, y: -0.2, z: 1.5, size: 0.17 },
      { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
    ],
    []
  );

  const smPositions = useMemo(
    () => [
      { x: -2, y: -2.7, z: 1.5, size: 0.4 },
      { x: -2.2, y: -1, z: 1.5, size: 0.5 },
      { x: -2.6, y: -0.2, z: 1.5, size: 0.1 },
      { x: 0, y: 0, z: 1.5, size: 0.3 },
      { x: 2, y: 1.6, z: 1.5, size: 0.2 },
      { x: 2, y: -0.2, z: 1.5, size: 0.17 },
      { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
    ],
    []
  );

  const xsPositions = useMemo(
    () => [
      { x: -0.5, y: -2.7, z: 1.5, size: 0.4 },
      { x: -2.2, y: -1, z: 1.5, size: 0.5 },
      { x: -2.6, y: -0.2, z: 1.5, size: 0.1 },
      { x: -1.8, y: 1.7, z: 1.5, size: 0.3 },
      { x: 2, y: 1.6, z: 1.5, size: 0.2 },
      { x: 4.65, y: -0.2, z: 1.5, size: 0.17 },
      { x: 2.1, y: -1.6, z: 1.5, size: 0.7 },
    ],
    []
  );

  useEffect(() => {
    function updatePositions() {
      setSquarePositions(() => {
        if (viewport === "2xl") {
          return xxlPositions;
        } else if (viewport === "xl") {
          return xlPositions;
        } else if (viewport === "lg") {
          console.log("LG POSITION ACTIVE");
          return lgPositions;
        } else if (viewport === "md") {
          console.log("MD POSITION ACTIVE");
          return mdPositions;
        } else if (viewport === "sm") {
          console.log("SM POSITION ACTIVE");
          return smPositions;
        } else {
          return xsPositions;
        }
      });

      setZoom(viewport != "sm" && viewport != "xs" ? 5 : 7);

      if (viewport == "2xl") {
        setwireFrameCam(0);
      } else if (viewport == "xl") {
        setwireFrameCam(1);
      } else if (viewport == "lg") {
        setwireFrameCam(2);
      }
      // setZoom(6);
    }

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, [
    xsPositions,
    lgPositions,
    smPositions,
    xlPositions,
    xxlPositions,
    viewport,
    mdPositions,
  ]);

  return (
    <div className="absolute h-full w-full z-10 pointer-events-none overflow-hidden">
      <Canvas style={{ pointerEvents: "none", clipPath: "inset(0)" }}>
        <View track={sectionRef as RefObject<HTMLDivElement>}>
          <ambientLight intensity={0.8} />
          <pointLight position={[0, 0, 2]} intensity={5} distance={0} />
          <RotatingSquare positions={squarePositions} />
          <PerspectiveCamera makeDefault position={[0, 0, zoom]} fov={75} />
        </View>
        <View track={wireframeRef as RefObject<HTMLDivElement>}>
          <ambientLight intensity={1} />
          <WireframeSphere />
          <PerspectiveCamera
            makeDefault
            position={[wireframeCam, 0, 5]}
            fov={75}
          />
        </View>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
