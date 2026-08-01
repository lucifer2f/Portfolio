import React, { Suspense } from 'react'

const Navbar = React.lazy(() => import('./sections/Navbar'));
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experiences = React.lazy(() => import('./sections/Experiences'));
const Contact = React.lazy(() => import('./sections/Contact'));
const Footer = React.lazy(() => import('./sections/Footer'));

const SectionFallback = () => <div className='min-h-[20vh] w-full' />;

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Suspense fallback={<SectionFallback />}><Navbar /></Suspense>
      <Suspense fallback={<SectionFallback />}><Hero /></Suspense>
      <Suspense fallback={<SectionFallback />}><About /></Suspense>
      <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
      <Suspense fallback={<SectionFallback />}><Experiences /></Suspense>
      <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      {/* testimonial */}
    </div>
  );
};

export default App