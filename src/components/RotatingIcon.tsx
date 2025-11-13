import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RotatingIcon = () => {
  const cylinder1Ref = useRef<THREE.Mesh>(null);
  const cylinder2Ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (cylinder1Ref.current) {
      cylinder1Ref.current.rotation.z += 0.005;
    }
    if (cylinder2Ref.current) {
      cylinder2Ref.current.rotation.z += 0.005;
    }
  });

  return (
    <>
      <mesh
        ref={cylinder1Ref}
        position={[2.5, 0.6, 1.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.5, 0.5, 0.1, 64]} />
        <meshStandardMaterial
          attach="material"
          color="#67E8F9"
          emissive="#67E8F9"
          emissiveIntensity={0.4}
          metalness={0.4}
          opacity={1}
          roughness={0.2}
        />
      </mesh>
      <mesh
        ref={cylinder2Ref}
        position={[2.5, -1.4, 1.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry
          args={[1.2, 1.2, 0.1, 64, 1, false, -Math.PI / 2, Math.PI]}
        />
        <meshStandardMaterial
          attach="material"
          color="#67E8F9"
          emissive="#67E8F9"
          emissiveIntensity={0.4}
          metalness={0.4}
          opacity={1}
          roughness={0.2}
        />
      </mesh>
    </>
  );
};

export default RotatingIcon;
