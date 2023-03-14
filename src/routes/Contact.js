import React from 'react'
import Navbar from '../Components/Navbar';
import ProjectHero from '../Components/ProjectHero';
import Footer from '../Components/Footer';
import PricingCard from '../Components/PricingCard';
import ProjectCard from '../Components/ProjectCard';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading="Contact." text="Some of my most recent works" />
      <ProjectCard/>
      <PricingCard/> 
      <Footer/>
    </div>
  );
}

export default Contact;

