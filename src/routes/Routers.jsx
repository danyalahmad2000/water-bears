import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Book from '../pages/Book'

const Routers = () => {
  return (
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/home' element={<Home/>}/>
      <Route path ='/book' element={<Book/>}/>
    </Routes>
  )
}

export default Routers