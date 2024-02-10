import React, { useState } from 'react'
import "./SideBar.css"
import CrudWorkout from './CrudWorkout'
import Analytics from './Analytics'
import { FaRegEdit } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";


const SideBar = () => {
  const [flag, setFlag] = useState()
  let linkStyle = { color: 'black', textDecoration:'none'}
  return (
    <>
          <div className='crudcomps'>
        
       {flag === false? <CrudWorkout/> : flag === true? <Analytics/> : <CrudWorkout/>}
    </div>
   
    <div className='sideBar'>

       <div className='adminDashHead'> Admin Dashboard</div>
       <br></br>
       <div className='links' >
       <li style={linkStyle} ><button onClick={()=>setFlag(true)} className='dashALinks'>
         <IoAnalyticsOutline style={{fontSize:'25px'}} /> Analytics</button></li>

       <li style={linkStyle} ><button onClick={()=>setFlag(false)} className='dashWLinks'><FaRegEdit style={{fontSize:'20px'}}/> Workout</button></li>
       </div>
       <div>
       </div>
    </div>
    </>
  )
}

export default SideBar