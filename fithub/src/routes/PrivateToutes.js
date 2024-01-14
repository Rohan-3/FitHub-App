import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import { About } from '../pages/About'
import Error404 from '../components/Error404'
import Auth from '../pages/Auth'
import User from '../components/User'
import WorkoutData from '../components/WorkoutData'
const PrivateToutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path="/workout" element={<WorkoutData/>}/>
        <Route path="/user" element={<User/>}/>
    </Routes>
    </div>
  )
}

export default PrivateToutes