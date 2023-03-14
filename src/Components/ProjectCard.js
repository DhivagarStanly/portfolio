import '../Components/ProjectCardStyles.css';
import { Link } from 'react-router-dom';
import ECom from '../Assets/Ecom.jpg';
import Cloud from '../Assets/cloud.jpg';
import DigitalM from '../Assets/DM.jpg';

import React from 'react';

const ProjectCard = () => {
    return (
        <div className='project-card2'>
             <h1 className='head'>My Projects</h1>
            <div className='container2'>
                
                <div className='card2'>
                    <img className='img' src={ECom} alt='Img-card'></img>
                    <h3 className='heading2'>Project Name</h3>
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <Link to="/contact" className='btn btn2 btn3'> Contact </Link>
                </div>
                <div className='card2'>
                    <img className='img' src={Cloud} alt='Img-card'></img>
                    <h3 className='heading2'>Project Name</h3>
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <Link to="/contact" className='btn btn2 btn3'> Contact </Link>
                </div>
                <div className='card2'>
                    <img className='img' src={DigitalM} alt='Img-card'></img>
                    <h3 className='heading2'>Project Name</h3>
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <Link to="/contact" className='btn btn2 btn3'> Contact </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;