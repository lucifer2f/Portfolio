import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import { Astronaut } from './Astronaut';

const HeroScene = ({ isMobile }) => {
  const astronautScale = isMobile ? 0.23 : undefined;
  const astronautPosition = isMobile ? [0, -1.5, 0] : undefined;

  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <Float>
        <Astronaut
          scale={astronautScale}
          position={astronautPosition}
        />
        <Rig />
        <OrbitControls enableZoom={false} />
      </Float>
    </Canvas>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5, delta);
  });
}

export default HeroScene;
