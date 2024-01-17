import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import { About } from '../pages/About'
import Error404 from '../components/Error404'
import Auth from '../pages/Auth'
import User from '../components/User'
import WorkoutData from '../components/WorkoutData'
import AdminDashboard from '../pages/AdminDashboard'
import UserCategory from '../components/User_Category'
import UserWorkout from '../components/User_Workout'
import WorkoutVideo from '../components/WorkoutVideo'
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
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/user_cat" element={<UserCategory/>}/>
        <Route path="/user_workout" element={<UserWorkout/>}/>
        <Route path="/video" element={<WorkoutVideo/>}/>
    </Routes>
    </div>
  )
}

export default PrivateToutes