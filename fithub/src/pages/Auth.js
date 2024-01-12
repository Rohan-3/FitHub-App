import React, { useState } from 'react'
import ResgistrationForm from '../components/ResgistrationForm'
import Login from '../components/Login';
import '../assets/styles/Auth.css'
import AuthImage from '../assets/images/AuthImage.jpeg'
const Auth = () => {
    const [flag, setFlag] = useState();
  return (
    <div>
    <div className='wholePage'>
    <div className='leftSide'>
      <img src={AuthImage} alt='image' className='Aimage'/>
    </div>
    <div className='rightSide'>
    <div className='toogleBtns'>
    <button onClick={()=> setFlag(true)}>Register</button>
    <button onClick={()=> setFlag(false)}>Login</button>
    </div>
    <div>
    {flag === true? <ResgistrationForm/> : flag === false? <Login/> : <ResgistrationForm/>}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Auth