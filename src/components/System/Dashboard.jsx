import React from 'react';
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
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>PIXELART</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
