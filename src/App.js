import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Login from './components/Login/Login';
import System from './components/System/System';
import Videos from './components/System/main/Videos';

function App() {

  const loggedUserToken = window.localStorage.getItem('loggedSystemTeamsito')

  return (
    <Router>
      <Routes>
        {loggedUserToken != null ? <Route path="/" element={<Navigate to="/dashboard" />} />
          : <Route path="/" element={<Login />} />
        }
        {loggedUserToken != null ? <Route path="/dashboard/*" element={<System />} /> : null}
      </Routes>
    </Router>

  );
}

export default App;
