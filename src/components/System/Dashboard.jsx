import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../../assets/img/sinFnd.png';


const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="sidebar-container">
        <div className="sidebar__brand">
          <img src={imgLogo} alt="Teamsito Logo" />
        </div>
        <div className="sidebar__group">
          <ul>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard/html">HTML <i className="fab fa-html5"></i></NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard/css">CSS <i className="fab fa-css3"></i></NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard/js">JS <i className="fab fa-js-square"></i></NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
