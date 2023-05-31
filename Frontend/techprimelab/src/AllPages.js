import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
export default function AllPages() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
    </Routes>
  )
}
