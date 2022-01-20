import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Main from './Main';
import '../../assets/css/systemStyle.css';

const System = () => {
  return (
    <div>
      <div className="d-flex">
        <Dashboard />
        <div className="w-100">
          <Navbar />
          <div className=" bg-primary">
            <div className="border-top-left-50 container bg-info">
              <Main />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default System;
