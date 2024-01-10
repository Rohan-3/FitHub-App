import React, { useState } from 'react'
import ResgistrationForm from '../components/ResgistrationForm'
import Login from '../components/Login';
import '../assets/styles/Auth.css'
const Auth = () => {
    const [flag, setFlag] = useState();
  return (
    <div>
    <div className='toogleBtns'>
    <button onClick={()=> setFlag(true)}>Register</button>
    <button onClick={()=> setFlag(false)}>Login</button>
    </div>
    {flag === true? <ResgistrationForm/> : flag === false? <Login/> : <ResgistrationForm/>} 
    </div>
  )
}

export default Auth