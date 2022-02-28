import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="Container-header">
          <nav className="nav">
            <a href="./" >Home</a>
            <NavLink to="/Studies">Estudios</NavLink>
            <NavLink to="/Projects">Proyectos</NavLink>
            <a href="#Sobremi" > Sobre mi</a>
          </nav>
        </div>
      </header>
    </>
  )
}
