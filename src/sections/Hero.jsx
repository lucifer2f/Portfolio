import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import HeroText from "../component/HeroText"
import ParallaxBackground from "../component/ParallaxBackground"
import { useMediaQuery } from 'react-responsive';

const HeroScene = lazy(() => import('../component/HeroScene'));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const sectionRef = useRef(null);
  const [shouldRenderScene, setShouldRenderScene] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cancelled = false;

    const enableScene = () => {
      if (!cancelled) {
        setShouldRenderScene(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enableScene();
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    window.addEventListener('pointerdown', enableScene, { once: true });
    window.addEventListener('keydown', enableScene, { once: true });
    window.addEventListener('touchstart', enableScene, { once: true });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener('pointerdown', enableScene);
      window.removeEventListener('keydown', enableScene);
      window.removeEventListener('touchstart', enableScene);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {shouldRenderScene ? (
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