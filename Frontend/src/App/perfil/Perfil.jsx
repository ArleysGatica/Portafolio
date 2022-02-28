import React from 'react'
import './Perfil.css'
import { BsGithub, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import yo from '../Images/yo2.jpg'

export const Perfil = () => {
  return (
    <>
      <div className="Container">
        <div className="Container-img">
          <img src={yo} alt="" />
        </div>
        <div className="Container-title">
          <h1>Arleys Manzanares Gatica</h1>
        </div>
        <div className="Container-description">
          <p>Systems engineer | Web Developer Frontend</p>
        </div>
        <div className="Container-Redes-info">
          <a
            rel="noreferrer"
            href="https://github.com/ArleysGatica"
            target="_blank"
          >
            <BsGithub className='Git' />
          </a>
          <a
            rel="noreferrer"
            href="mailto:gatica.arleys16@gmail.com?subject=Desde_Portafolio&body=Hola%20Arleys%20Gatica%20"
            target="_blank"
          >
            <SiGmail className='Gmail' />
          </a>
          <a className='whatsapp'
            rel="noreferrer"
            href="https://www.linkedin.com/in/arleys-gatica16/"
            target="_blank"
          >
            <BsLinkedin className='linkedin' />
          </a>
        </div>
        <a
          className="Container-whatsApp"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=+505 8634-9918"
          target="_blank"
        >
          <BsWhatsapp className='What' />
          <p>+505 8634-9918</p>
        </a>
      </div>
    </>
  )
}