// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Mi Aplicación</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Citas</Link></li> {/* Ahora este link muestra Appointments */}
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/home">Inicio</Link></li> {/* Ruta para el componente Home */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
