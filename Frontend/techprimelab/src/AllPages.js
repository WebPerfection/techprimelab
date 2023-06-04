import React from 'react'
import {Routes,Route} from "react-router-dom"
import BarChart from './Dashboard/Chat'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Sidebar from './Navbar/Sidebar/Sidebar'
import DashboardBody from './Navbar/Secondbar/DashboardBody'
export default function AllPages() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} ></Route>
        {/* <Route path='/dashboard' element={<Sidebar/>} ></Route> */}
        <Route path='/dashboard' element={<DashboardBody/>} ></Route>
    </Routes>
  )
}
