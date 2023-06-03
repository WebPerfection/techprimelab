import React, { useState, useEffect } from 'react';
import './DashboardBody.css';
import PcBackground from '../../Icons/Header-bg.svg';
import MobileBackground from '../../Icons/login-bg-1.png';
import logo from '../../Icons/Logo.svg';
import Dashboard from '../../Icons/Dashboard.svg';
import Dashboard_active from '../../Icons/Dashboard-active.svg';
import Create_Project from '../../Icons/create-project.svg';
import Create_Project_active from '../../Icons/create-project-active.svg';
import Project_list from '../../Icons/Project-list.svg';
import Project_list_active from '../../Icons/Project-list-active.svg';
import ExitIcon from '../../Icons/Logout.svg';
const DashboardBody = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [activeIcon, setActiveIcon] = useState("dashboard");
    const handleIconClick = (icon) => {
        setActiveIcon(icon);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`Main_container ${isMobile ? 'mobile' : ''}`}>
            <div className={`sidebar ${isMobile ? 'mobile' : ''}`}>
                {/* Sidebar content goes here */}
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
            <div className={`body ${isMobile ? 'mobile' : ''}`}>
                <nav className='DashboardNav'>
                    <div className='background_img'>
                        <img src={isMobile ? MobileBackground : PcBackground} alt="Background"></img>
                    </div>

                    <div className='Logo_bar'>
                        <h3>Create Project</h3>
                        <img src={logo} alt="Logo"></img>
                    </div>

                </nav>
                {/* Body content goes here */}
            </div>
        </div>
    );
};

export default DashboardBody;
