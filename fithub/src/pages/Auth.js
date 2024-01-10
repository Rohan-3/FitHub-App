import React, { useState } from 'react'
import ResgistrationForm from '../components/ResgistrationForm'
import Login from '../components/Login';
const Auth = () => {
    const [flag, setFlag] = useState();
  return (
    <div>
    <button onClick={()=> setFlag(true)}>Register</button>
    <button onClick={()=> setFlag(false)}>Login</button>
    {flag === true? <ResgistrationForm/> : flag === false? <Login/> : <ResgistrationForm/>} 
    </div>
  )
}

export default Auth