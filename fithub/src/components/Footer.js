import React from "react";
import "../assets/styles/Footer.css"
import Logo from '../assets/images/FithubLogo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer=()=>{

    return(
        <div className="footer">
                        
                        
                    
                    <div className="footer-content">
                    <div className="footer-head">
                    <div>
                    <img className="footer-logo" src={Logo}/>
                    </div>
                    <div>
                        <h2 >Fithub Fitness Studio</h2>
                    </div>
                        </div>
                        <p>
                        We are a group of nerds dedicated to bringing you trustworthy information on how to create long-term, 
                        sustainable fitness results ~ all while actively celebrating unique passions and nerdiness in all forms.
                        Over the past 14 years, we’ve helped thousands of people reach their fitness goals through our free articles and our kick-ass 1-on-1 Online Coaching Program. 
                        </p>
                        <div className="icons">
                        <ul>
                        <li className="footer-icon"><FaFacebook /></li>
                        <li className="footer-icon"><FaInstagram /></li>
                        <li className="footer-icon"><FaYoutube /></li>
                        </ul>
                        </div>
                        <p className="footer-dev-info">© FITHUB 2024 | Designed & Developed by FITHUB Team</p>
                    </div>
                    
        
                </div>
        

    )
}
export default Footer;