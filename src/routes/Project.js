import React from 'react';
import "../Components/project.css"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectHero from '../Components/ProjectHero';
import PricingCard from '../Components/PricingCard';
import ProjectCard from '../Components/ProjectCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHero heading="My Projects"  text="Some of my most recent works"/>
      <ProjectCard/>
      <PricingCard/> 
      <Footer/>
    </div>
  );
}

export default Project;