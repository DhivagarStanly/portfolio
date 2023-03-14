import "./NavbarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import{FaBars, FaTimes} from "react-icons/fa";



const Navbar = () => {

const[click,setClick]=useState(false);
const handleclick = () => setClick(!click);

const[color,setColor]=useState(false);
const changeColor= () => {
    if(window.scrollY >=1){
       setColor(true);
    }else{
        setColor(false);
    }
};
window.addEventListener("scroll",changeColor)
    return (
        <div className={color? "header header-bg": "header"}>
          
            <Link className="logo" to='/'>
            <h1>Dhivagar</h1><h1 className="stanly">Stanly</h1>
            </Link>
            
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/About"> About</Link>
                </li>
                <li>
                    <Link to="/Contact"> Contact</Link>
                </li>
                
            </ul>
            
           <div className="menuicon" onClick={handleclick}>
            {/* if else condition  */}

            {click ? ( <FaTimes size={48} style={{color:"#fff"}}/>) 
            
            :(<FaBars size={48} style={{color:"#fff"}}/>) }

           
            
           </div>
        </div>
    )
}

export default Navbar;