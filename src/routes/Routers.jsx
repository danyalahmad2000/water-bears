import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Breed from '../pages/Breed'

const Routers = () => {
  return (
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/home' element={<Home/>}/>
      <Route path ='/breed' element={<Breed/>}/>
    </Routes>
  )
}

export default Routers