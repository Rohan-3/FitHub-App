import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
const PrivateToutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default PrivateToutes