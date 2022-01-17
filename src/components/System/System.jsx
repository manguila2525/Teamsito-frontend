import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Main from './Main';
import '../../assets/css/systemStyle.css';

const System = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Dashboard />
        <Main />
      </div>
    </div>
  );
}

export default System;
