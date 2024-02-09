import React, { useState } from 'react'
import "./SideBar.css"
import CrudWorkout from './CrudWorkout'
import Analytics from './Analytics'


const SideBar = () => {
  const [flag, setFlag] = useState()
  let linkStyle = { color: 'black', textDecoration:'none'}
  return (
    <>
          <div className='crudcomps'>
        
       {flag === false? <CrudWorkout/> : flag === true? <Analytics/> : <CrudWorkout/>}
    </div>
   
    <div className='sideBar'>

       <h2 className='adminDashHead'> Admin Dashboard</h2>
       <br></br>
       <div className='links' >
       <li style={linkStyle} ><button onClick={()=>setFlag(false)} className='dashLinks'>Workout</button></li>
       <li style={linkStyle} ><button onClick={()=>setFlag(true)} className='dashLinks'>Analytics</button></li>
       </div>
       <div>
       </div>
    </div>
    </>
  )
}

export default SideBar