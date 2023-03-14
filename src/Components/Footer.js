import "../Components/Footerstyles.css";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import React from 'react';

function footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="Left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>No:126, Appasamy Nagar, </p>
                        <p>Tindivanam, TamilNadu</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 70104 39791</h4>

                    </div>
                    <div className="email">
                        <h4> <SiGmail size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            dhivagarstanly@gmail.com</h4>

                    </div>
                </div>


                <div className="right">
                <h4>About me</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nostrum quaerat quod? Ipsa sapiente dolor reprehenderit debitis quo excepturi dolorem.</p>
                <div className="social">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                            
                </div>
                </div>

            </div>
        </div>
    )
}

export default footer