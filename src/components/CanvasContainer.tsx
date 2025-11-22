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
  isMobile,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  wireframeRef: React.RefObject<HTMLDivElement | null>;
  isMobile: boolean;
}) => {
  const [squarePositions, setSquarePositions] = useState<InputType[]>([]);
  const [zoom, setZoom] = useState<number>(5);

  const desktopPositions = useMemo(
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

  const mobilePositions = useMemo(
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
      setSquarePositions(
        isMobile
          ? mobilePositions // define separately
          : desktopPositions
      );

      setZoom(isMobile ? 7 : 5);
    }

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, [desktopPositions, isMobile, mobilePositions]);

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
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        </View>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
