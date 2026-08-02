import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Astronaut } from './Astronaut';

const HeroScene = ({ isMobile }) => {
  const astronautScale = undefined;
  const astronautPosition = isMobile ? [0, -1.5, 0] : undefined;

  return (
    <Canvas
      camera={{ position: [0, 1, 3] }}
      className={isMobile ? 'pointer-events-none' : ''}
      style={isMobile ? { pointerEvents: 'none' } : undefined}
    >
      <Float
        enabled={!isMobile}
        speed={1.4}
        floatIntensity={0.7}
        rotationIntensity={0.15}
      >
        <Astronaut
          scale={astronautScale}
          position={astronautPosition}
        />
        {!isMobile && <OrbitControls enableZoom={false} />}
      </Float>
    </Canvas>
  );
};

export default HeroScene;
