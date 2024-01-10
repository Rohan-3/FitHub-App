import React from 'react'
import Image404 from '../assets/images/Error404.png'
import '../assets/styles/Error404.css'
import { useNavigate } from 'react-router-dom'
const Error404 = () => {

let navigate = useNavigate()
    const goBack =()=>{
        navigate(-1)
    }
  return (
    <>
        <div className='errdiv'>
        <img className='errImage' src={Image404} alt='Page not found Error 404'/>
        <div>
        <h2>PAGE NOT FOUND 404 !</h2>
        <button onClick={goBack}>Go Back</button>
        </div>
        </div>
    </>
    
  )
}

export default Error404