import React from 'react'
import '../assets/styles/NavBar.css'
import Logo from '../assets/images/FithubLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let linkStyle = { color: 'white', textDecoration:'none'}

  return (
    <>
    <div className='nav'>
      <div className='logo'>
      <img src={Logo} alt=''/>
      </div>
      <div className='nav-links'>
      <ul>
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/workout' style={linkStyle}><li>Workout</li></Link>
          <li>Nutrition</li>
          <Link to='/auth' style={linkStyle}>Register/Login</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
      </div>

    </div>
    </>

  )
}

export default Navbar