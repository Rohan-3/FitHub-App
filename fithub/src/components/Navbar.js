import React from 'react'
import '../assets/styles/NavBar.css'
import Logo from '../assets/images/FithubLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import BlogsMenu from './BlogsMenu'
import UserProfile from './User_Profile'
import AboutMenu from './AboutMenu'

const Navbar = () => {
  let linkStyle = { color: 'white', textDecoration:'none'}

  let nav = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('adminno');
    alert("You are Logged Out");
    nav("/auth");
  }
  
  const handleAlert = (temp)=>{
    alert(`Login first to View ${temp} Page !`)
  }
  return (
    <>
    <div className='nav'>
      <div className='logo'>
      <Link to='/'><img src={Logo} alt=''/></Link>
      </div>
      <div className='nav-links'>
      {
        localStorage.getItem("adminno") ?
        
        <ul className='navbar_ul'>  
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/admin' style={linkStyle}>Dashboard</Link>
          <li ><AboutMenu title="About" color="white" bgcolor="rgb(20, 20, 20)" op1="About" op2="Founders"/></li>
          <Link to='/user_cat' style={linkStyle}><li>Workout</li></Link>
          <Link to='/diet_cat' style={linkStyle}><li>Diet</li></Link> 
          <Link style={linkStyle} ><BlogsMenu title="Blogs" op1="Blogs" op2="My Blogs"/></Link>
          <Link to='/favorite' style={linkStyle}>Favorite</Link>
          <Link to="/auth" style={linkStyle} onClick={handleLogout}>logout</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </ul>
        :
        localStorage.getItem("userno") ?
        <ul className='navbar_ul'>  
          <Link to='/' style={linkStyle}>Home</Link>
          <li ><AboutMenu title="About" color="white" bgcolor="rgb(20, 20, 20)" op1="About" op2="Founders"/></li>
          <Link to='/user_cat' style={linkStyle}><li>Workout</li></Link>
          <Link to='/diet_cat'  style={linkStyle}><li>Diet</li></Link> 
          <li ><BlogsMenu title="Blogs" color="white" bgcolor="rgb(20, 20, 20)" op1="Blogs" op2="My Blogs"/></li>
          {/* <Link style={linkStyle} onClick={handleLogout}>logout</Link> */}
          <Link to='/contact' style={linkStyle}>Contact</Link> 
          <UserProfile />
        </ul>

        :  
        
        <ul className='navbar_ul'>  
          <Link to='/' style={linkStyle}>Home</Link>
          <li ><AboutMenu title="About" color="white" bgcolor="rgb(20, 20, 20)" op1="About" op2="Founders"/></li>
          <Link to='/auth' onClick={()=>handleAlert("workout")} style={linkStyle}><li>Workout</li></Link>
          <Link to='/auth' onClick={()=>handleAlert("Diet")} style={linkStyle}><li>Diet</li></Link> 
          <Link to='/auth' onClick={()=>handleAlert("blogs")} style={linkStyle}>Blogs</Link>
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