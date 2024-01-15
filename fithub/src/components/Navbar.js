import React from 'react'
import '../assets/styles/NavBar.css'
import Logo from '../assets/images/FithubLogo.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let linkStyle = { color: 'white', textDecoration:'none'}

  let data = JSON.parse(localStorage.getItem("u")) || [];
  
  let userinfo = sessionStorage.getItem("user") || [];

  let filteredUserNo = data.filter((temp) => temp.phone === userinfo )
  
  let nav = useNavigate()
  const handleLogout=()=>{
    localStorage.clear('adminno');
    alert("You are Logged Out");
    nav("/auth");

  }
  return (
    <>
    <div className='nav'>
      <div className='logo'>
      <img src={Logo} alt=''/>
      </div>
      <div className='nav-links'>
      {
        localStorage.getItem("adminno") ?
        
        <ul>  
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/admin' style={linkStyle}>Dashboard</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/workout' style={linkStyle}><li>Workout</li></Link>
          <li>Nutrition</li>
          <Link to='/' onClick={handleLogout} style={linkStyle}>Logout</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
        :
        filteredUserNo === null ?
        <ul>  
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/workout' style={linkStyle}><li>Workout</li></Link>
          <li>Nutrition</li>
          <Link to='/' style={linkStyle}>Logout</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
        :
        <ul>  
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/workout' style={linkStyle}><li>Workout</li></Link>
          <li>Nutrition</li>
          <Link to='/auth' style={linkStyle}>Register/Login</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
      }
      </div>

    </div>  
    </>

  )
}

export default Navbar