import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import { About } from '../pages/About'
import Error404 from '../components/Error404'
import Auth from '../pages/Auth'
import User from '../components/User'
import AdminDashboard from '../pages/AdminDashboard'
import UserCategory from '../components/User_Category'
import UserWorkout from '../components/User_Workout'
import WorkoutVideo from '../components/WorkoutVideo'
import DietCategory from '../components/Diet_Category'
import Diet from '../components/Diet'
import CreateBlog from '../components/Create_Blog'
import Blogs from '../components/Blogs'
import CrudWorkout from '../components/admin/CrudWorkout'
import CrudDiet from '../components/admin/CrudDiet'
import Favorite from '../components/Favorite'
import Analytics from '../components/admin/Analytics'
import BotDiet from '../components/BotDiet'

import Founders from '../components/Founders'
const PrivateToutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/founders' element={<Founders/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path="/crudworkout" element={<CrudWorkout/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/user_cat" element={<UserCategory/>}/>
        <Route path="/user_workout" element={<UserWorkout/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/video" element={<WorkoutVideo/>}/>
        <Route path="/cruddiet" element={<CrudDiet/>}/>
        <Route path="/diet_cat" element={<DietCategory/>}/>
        <Route path="/diet" element={<Diet/>}/> 
        <Route path="/create_blog" element={<CreateBlog/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/botdiet" element={<BotDiet/>}/>
    </Routes>
    </div>
  )
}

export default PrivateToutes