import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface RotatingSquareTypes {
  positions: InputType[];
}

interface InputType {
  x: number;
  y: number;
  z: number;
  size: number;
}

const RotatingSquare = ({ positions }: RotatingSquareTypes) => {
  const cubeRefs = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    cubeRefs.current.forEach((cube) => {
      if (cube) {
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        cube.rotation.z += 0.001;
      }
    });
  });

  return (
    <>
      {positions.map((pos, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) cubeRefs.current[index] = el;
          }}
          position={[pos.x, pos.y, pos.z]}
          rotation={[index, index, index]}
        >
          <boxGeometry
            attach="geometry"
            args={[pos.size, pos.size, pos.size]}
          />
          <meshStandardMaterial
            attach="material"
            color="#f086d4"
            emissive="#f086d4"
            emissiveIntensity={0.1}
            metalness={0.4}
            opacity={1}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  );
};

export default RotatingSquare;
