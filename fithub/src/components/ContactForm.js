import {React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/ContactForm.css'
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import WhatsApp from '../components/WhatsApp'


const ContactForm = () => {
    const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TAMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          alert("Message Sent Succesfully, We will get back to you soon");
      }, (error) => {
        alert(error.message);
      });
      e.target.reset(); 
  };
  return (
    <div className='contactPage'>
    
       <div className='headContact'>
       <h2>Contact Us</h2>
       </div>
       <div className='dandf'>
       <div className="left-side">
       
        <div className="iconNdetails">
        <span className='icons'><FaAddressCard size="50" /></span> 
        <div className="topic">Address</div>
          <div className="text-one">Plot number 52 </div>
          <div className="text-two">Birendranagar T-point</div>
        </div>

        <div className="iconNdetails">
        <span className='icons'><FaPhone  size="50"/></span>          
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 56471</div>
          <div className="text-two">+0096 3434 56786</div>
        </div>

        <div className="iconNdetails">
        
        <span className='icons'><MdMarkEmailRead size="50" /></span>
          <div className="topic">Email</div>
          <div className="text-one">fitHub@gmail.com</div>
          <div className="text-two">info.fitHub@gmail.com</div>
        </div>
      </div>
       <div className='wholeForm'>
       <form className='cform' ref={form} onSubmit={sendEmail}>
        <label >Enter Name</label><br></br>
        <input name="user_name" type='text' placeholder='Enter Name'/><br></br><br></br>
        <label >Enter Email Id</label><br></br>
        <input name="user_email" type='email' placeholder='Enter Email ID'/><br></br><br></br>
        <label>Enter Phone no.</label><br></br>
        <input name='user_phone' type='number' placeholder='Enter Phone Number'/><br></br><br></br>
        <label>Enter subject.</label><br></br>
        <input name="message" type='text' placeholder='Enter Subject/Query'/><br></br><br></br>
        <button type="submit" value="Send"  className='fsubBtn'>Submit</button>
        </form>
       </div>
       </div>
       <WhatsApp/>

       
       
    </div>
  )
}

export default ContactForm