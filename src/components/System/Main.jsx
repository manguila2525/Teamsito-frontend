import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Videos from './main/Videos';
import Other from './main/Other';

const Main = () => {
  return (

    // <div className="container">
    //   <h1>Main</h1>
    // </div>

    // <Routes>
    //   <Route path="/" element={<Other />}>
    //    <Route path="videos" element={<Videos />} />
    //   <Route/>
    // </Routes>

    <div>
      <h1>Main</h1>
      <Routes>
        <Route path="others" element={<Other />} />
        <Route path="videos" element={<Videos />}>
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
