
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Login from './components/Login/Login';
import System from './components/System/System';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<System />} />
      </Routes>
    </Router>

  );
}

export default App;
