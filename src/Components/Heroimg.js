import "./Heroimgstyles.css";
import introImg from "../Assets/pic1.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introImg} alt="introimg" /> 
        </div>
        <div className="content">
            <p> HI, I'M A  Dhivagar Stanly</p>
            <h1>React Developer.</h1>
            <div className="button">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
        
         </div>
    
  )
}

export default Heroimg;