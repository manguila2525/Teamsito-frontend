import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="w-100">
      <nav className="navbar">
        <div>

        </div>
        <div className="navbar__group">
          <ul>
            <li>Perfil</li>
            <li>Configuracion</li>
            <li>Añadir video</li>
          </ul>
        </div>
        <div>
          <Link to="/" onClick={() => {
            window.localStorage.removeItem('loggedSystemTeamsito')
            const loggedUserToken = window.localStorage.getItem('loggedSystemTeamsito')
            if (loggedUserToken.split(' ')[1] !== undefined || loggedUserToken) {
              console.log("ok")
              window.location.href = "http://localhost:3000/"
            }
          }}> <i className="fas fa-sign-out-alt font-50"></i></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
