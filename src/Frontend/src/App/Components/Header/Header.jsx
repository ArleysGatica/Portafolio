import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';


export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="Container-header">
          <nav className='nav'>
            <ul>
              <li><a href="./" className='select'>Home</a></li>
              <NavLink to="/Studies"><li><a href="/" className='select'>Estudios</a></li> </NavLink>
              <NavLink to="/Projects"><li><a href="/" className='select'>Proyectos</a></li> </NavLink>
              <li><a href="#Sobremi" className='select'>Sobre Mi</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

