import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Registration from '../pages/Registration'
import { About } from '../pages/About'
import Error404 from '../components/Error404'
const PrivateToutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default PrivateToutes