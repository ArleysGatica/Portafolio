import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="Container-header">
          <nav className='nav'>
            <ul>
              <li><a href="#" className='select'>Home</a></li>
              <li><a href="#" className='select'>Sobre Mi</a></li>
              <li><a href="#" className='select'>Portafolio</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

