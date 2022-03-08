import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { VscThreeBars } from 'react-icons/vsc'

export const Header = () => {

  const [show, setShow] = useState(false)
  const hadleClick = () => {
    setShow(!show)
  }

  return (
    <>
      <header className="header">
        <div className="Container-header">
          <button onClick={hadleClick}>
            <VscThreeBars />
          </button>
          <div
            className={
              show
                ? `HomeContainer__NavBar__Rigth show`
                : `HomeContainer__NavBar__Rigth`
            }
          >
            <nav className="nav">
              <a href="./" >Home</a>
              <NavLink to="/Studies">Estudios</NavLink>
              <NavLink to="/Projects">Proyectos</NavLink>
              <a href="#Sobremi" > Sobre mi</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}