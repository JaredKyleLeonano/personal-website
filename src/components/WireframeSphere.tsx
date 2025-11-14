// WireSphereSimple.tsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Wireframe } from "@react-three/drei";

const WireframeSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <mesh ref={sphereRef} rotation={[0, 0, 3]} position={[-1, -0.2, 0]}>
      <sphereGeometry args={[2.7, 24, 24]} />

      <meshStandardMaterial
        color="#22D3EE"
        transparent
        opacity={0.1}
        emissive="#FFD300"
        emissiveIntensity={0.6}
      />

      <Wireframe
        geometry={sphereRef.current?.geometry}
        simplify={true}
        fillOpacity={0}
        stroke="#FFD300"
        strokeOpacity={1}
        thickness={0.04}
        depthTest={false}
      />
    </mesh>
  );
};

export default WireframeSphere;
