import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectHero from '../Components/ProjectHero';
import PricingCard from '../Components/PricingCard';
import ProjectCard from '../Components/ProjectCard';

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading="About." text="I'm a front-End Developer."/>
      <ProjectCard/>
      <PricingCard/> 
      <Footer/>
    </div>
  );
}

export default About;