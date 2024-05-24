import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/home' element={<Home />}/>

      </Routes>
    </div>
  )
}

export default Routing
