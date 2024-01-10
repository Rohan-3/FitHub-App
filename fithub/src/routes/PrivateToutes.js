import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import { About } from '../pages/About'
import Error404 from '../components/Error404'
import Auth from '../pages/Auth'
const PrivateToutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error404/>}/>
    </Routes>
    </div>
  )
}

export default PrivateToutes