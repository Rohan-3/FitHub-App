import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import '../assets/styles/WhatsApp.css'
import { Link } from 'react-router-dom';

const WhatsApp = () => {
    const style = { 
        color: "#FFF", 
        fontSize: "40px",
    }
    let linkStyle = { textDecoration:'none'}
    
  return (
    <div className='iconcomponent'>
    <div className='wholeicon'>
    <Link to='https://wa.me/9967990416' className='linksty' style={linkStyle}><FaWhatsapp style={style}/>  <span className='icon-text'>How can we help you?</span></Link>
    </div>
    </div>
  )
}

export default WhatsApp