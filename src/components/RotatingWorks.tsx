import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

type RotatingWorksProps = {
  hovered: boolean;
};

const RotatingWorks = ({ hovered }: RotatingWorksProps) => {
  const paperRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (paperRef.current) {
      const time = clock.getElapsedTime();
      paperRef.current.position.y = Math.sin(time) * 0.2;
      // paperRef.current.rotation.y += 0.002;

      const targetScale = hovered ? 1.5 : 0; // target scale
      const currentScale = paperRef.current.scale;
      const lerpFactor = 0.1; // adjust speed (0.1 = smooth, 1 = instant)

      // Lerp each axis individually
      currentScale.x = THREE.MathUtils.lerp(
        currentScale.x,
        targetScale,
        lerpFactor
      );
      currentScale.y = THREE.MathUtils.lerp(
        currentScale.y,
        targetScale,
        lerpFactor
      );
      currentScale.z = THREE.MathUtils.lerp(
        currentScale.z,
        targetScale,
        lerpFactor
      );
    }
  });

  return (
    <>
      <mesh ref={paperRef} scale={[0, 0, 0]} rotation={[0, -10, -25]}>
        <boxGeometry args={[2.5, 3, 0.005]} />
        <meshStandardMaterial
          attach="material"
          color="#A9A9A9"
          metalness={0.4}
          roughness={0.2}
          opacity={0.7}
          transparent={true} // <-- must be added for opacity to work
        />
        <Edges
          linewidth={1}
          color="#D3D3D3"
          threshold={10}
          opacity={0.7}
          transparent={true}
        ></Edges>

        <mesh position={[0, 1.0, 0]}>
          <boxGeometry args={[2, 0.3, 0.01]} />
          <meshStandardMaterial attach="material" color="#57B9FF" />
        </mesh>

        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 0.1, 0.01]} />
          <meshStandardMaterial attach="material" color="#ADD8E6" />
        </mesh>

        <mesh position={[-0.1, 0.3, 0]}>
          <boxGeometry args={[1.8, 0.1, 0.01]} />
          <meshStandardMaterial attach="material" color="#ADD8E6" />
        </mesh>

        <mesh position={[-0.05, 0.1, 0]}>
          <boxGeometry args={[1.9, 0.1, 0.01]} />
          <meshStandardMaterial attach="material" color="#ADD8E6" />
        </mesh>
      </mesh>
    </>
  );
};

export default RotatingWorks;
