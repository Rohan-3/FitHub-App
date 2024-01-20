import React from 'react'
import '../assets/styles/NavBar.css'
import Logo from '../assets/images/FithubLogo.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let linkStyle = { color: 'white', textDecoration:'none'}

  let nav = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('adminno');
    alert("You are Logged Out");
    nav("/auth");
  }
  const handleUserLogout=()=>
  {
    localStorage.removeItem('userno');
    alert("user logout");
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
          <li>Diet</li>
          <Link to='/auth' onClick={handleLogout} style={linkStyle}>Logout</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
        :
        localStorage.getItem("userno") ?
        <ul>  
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/user_cat' style={linkStyle}><li>Workout</li></Link>
          <Link to='/diet_cat' style={linkStyle}><li>Diet</li></Link> 
          <Link to='/auth' onClick={handleUserLogout} style={linkStyle}>Logout</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>

        :  
        
        <ul>  
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='/workout' style={linkStyle}><li>Workout</li></Link>
          <li>Diet</li>
          <Link to='/auth' style={linkStyle}> Register/Login</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
        }
        
      
      </div>

    </div>  
    </>

  )
}

export default Navbar