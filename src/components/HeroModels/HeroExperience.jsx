import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Room } from "./Room";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas shadows camera={{ position: [0, 2, 10], fov: 30 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={10}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />

      <Particles count={100} />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 1.25, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
