import React from 'react'
import Card from '../component/Card';

const About = () => {
  return    ( <section className='c-space section-spacing'>
    <h2 className='text-heading'>About Me</h2>
    <div className='grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] mt-12 gap-2'>
        {/* grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
            <img 
                src="assets/coding-pov.png"
                className='absolute scale-[1.75] -right-[5rem] -top-
                [1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'/>
            <div className='z-10'>
                <p className='headtext'>Hi,I'm Sandesh Singh</p>
                <p className='subtext'>
                Learning, experimenting, and building projects to sharpen development skills.
                </p>
            </div>
            <div className='absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
        </div>
        {/* grid 2 */}
        <div className='grid-default-color grid-2'>
            <div className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>
                    CODE IS CRAFT
                </p>
                <Card 
                style={{ rotate: "75deg", top: "30%", left: "25%"}} text="Learning" />
                <Card style={{ rotate: "-30deg", top: "60%", left: "50%"}} text="Building" />
                <Card style={{ rotate: "90deg", bottom: "45%", left: "75%"}} text="Designing" />
                <Card style={{ rotate: "30deg", top: "55%", left: "0%"}} text="Coding" />
                <Card style={{ rotate: "20deg", top: "10%", left: "48%"}} text="Exploring" />
                <Card style={{ rotate: "15deg", top: "10%", left: "0%"}} text="Creating" />
                <Card style={{ rotate: "25deg", top: "30%", left: "50%"}} 
                image="assets/logos/tailwindcss.Default" />
                <Card style={{ rotate: "-25deg", top: "42%", left: "25%"}} 
                image="assets/logos/javascript.png" />
                <Card style={{ rotate: "25deg", top: "74%", left: "75%"}} 
                image="assets/logos/ThreeJS.png" />
            </div>
            </div>
        {/* grid 3 */}
        <div className='grid-black-color grid-3'></div>
        {/* grid 4 */}
        <div className='grid-special-color grid-4'></div>
        {/* grid 5 */}
        <div className='grid-default-color grid-5'></div>
    </div>
  </section>
  );
};

export default About;