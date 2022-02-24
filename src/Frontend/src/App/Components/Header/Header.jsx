import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="Container-header">
          <nav className="nav">
            <NavLink to="/Studies">Home</NavLink>
            <NavLink to="/Studies">Estudios</NavLink>
            <NavLink to="/Projects">Proyectos</NavLink>
            <NavLink to="/About">About</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
