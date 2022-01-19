import React from 'react';

const Navbar = () => {
  return (
    <div className="w-100">
      <nav className="navbar">
        <div className="navbar__brand">
          {/* <img src="" alt="" /> */}
          <h3>img</h3>
        </div>
        <div className="navbar__group">
          <ul>
            <li>Perfil</li>
            <li>Configuracion</li>
            <li>Añadir video</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
