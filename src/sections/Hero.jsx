import React, { Suspense, lazy, useEffect, useState } from 'react';
import HeroText from "../component/HeroText"
import ParallaxBackground from "../component/ParallaxBackground"
import { useMediaQuery } from 'react-responsive';

const HeroScene = lazy(() => import('../component/HeroScene'));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setShowScene(true);
    }, 1500);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <section
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {showScene ? (
          <Suspense fallback={<div className="h-full w-full" />}>
            <HeroScene isMobile={isMobile} />
          </Suspense>
        ) : (
          <div className="h-full w-full" />
        )}
      </figure>
    </section>
  );
};

export default Hero;