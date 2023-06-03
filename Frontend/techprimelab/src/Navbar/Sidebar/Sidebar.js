import React, { useState } from 'react';
import Dashboard from '../../Icons/Dashboard.svg';
import Dashboard_active from '../../Icons/Dashboard-active.svg';
import Create_Project from '../../Icons/create-project.svg';
import Create_Project_active from '../../Icons/create-project-active.svg';
import Project_list from '../../Icons/Project-list.svg';
import Project_list_active from '../../Icons/Project-list-active.svg';
import ExitIcon from '../../Icons/Logout.svg';
import logo from '../../Icons/Logo.svg';
import {Routes,Route, useNavigate, Navigate} from "react-router-dom"
import './Sidebar.css'; //CSS file for styling
import Header from '../../Icons//Header-bg.svg';
import CreateProject from '../../CreateProject/CreateProject';
import BarChart from '../../Dashboard/Chat';

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState("dashboard");
  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className='Main_container'>
      <div className="sidebar">
        {/* Sidebar content */}
        <div className="sidebar-icons">
          <div className={`sidebar-icon ${activeIcon === 'dashboard' ? 'active' : ''}`} onClick={() => handleIconClick('dashboard')}>
            {/* Dashboard */}
            <img src={activeIcon === 'dashboard' ? Dashboard_active : Dashboard} alt="Dashboard" />
          </div>
          <div className={`sidebar-icon ${activeIcon === 'project_list' ? 'active' : ''}`} onClick={() => handleIconClick('project_list')}>
            {/* Project List */}
            <img src={activeIcon === 'project_list' ? Project_list_active : Project_list} alt="Project List" />
          </div>
          <div className={`sidebar-icon ${activeIcon === 'create_project' ? 'active' : ''}`} onClick={() => handleIconClick('create_project')}>
            {/*  Create Project*/}
            <img src={activeIcon === 'create_project' ? Create_Project_active : Create_Project} alt="Create Project" />
          </div>
          <div className="sidebar-exit-icon">
            {/* Exit Icon */}
            <img src={ExitIcon} alt="Exit" />
          </div>

        </div>



      </div>
      <div className='ContentParent'>
        <div className='header'>
          <div>
            {/*
             {Navbar background img} 12*/}
            <img className='Nav_background_img' src={Header}></img>
          </div>
          <div className='Header_logo'>
            <h2>Create Project</h2>
            <img className='Logo' src={logo}></img>
          </div>
        </div>
        <div className='content'>
          
        <Routes>
            <Route path={activeIcon==="dashboard" ? "/" :"null"} element={<BarChart />} />
            <Route path={activeIcon=="create_project"?"/":"null"} element={<CreateProject />} />
          </Routes>
          
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
