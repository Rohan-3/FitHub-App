import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
       <ContactForm/>
       <br></br><br></br>

       <h1 className='maphead'>Visit Us !</h1>
       <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.853733153588!2d72.84582847520635!3d19.114071582098386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d4ea2a2311%3A0x68124744f0f8d09!2sImarticus%20Learning%20Mumbai%20-%20Data%20Science%20%26%20Analytics%2C%20Investment%20Banking%20Course%20In%20Mumbai!5e0!3m2!1sen!2sin!4v1704822773114!5m2!1sen!2sin"  height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact