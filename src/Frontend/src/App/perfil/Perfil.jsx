import React from 'react';
import clientela from '../Images/clientela.png';
import github from '../Images/github.png';
import linkedin from '../Images/linkedin.png';
import gmail from '../Images/gmail.png';
import whatsapp from '../Images/whatsapp.png';
import './Perfil.css';

export const Perfil = () => {
  return (
    <>
      <div className='Container'>

        <div className='Container-img'>
          <img src={clientela} alt="" />
        </div>

        <div className='Container-title'>
          <h1>Arleys Dionisio Manzanares Gatica</h1>
        </div>
        <div className='Container-description'>
          <p>
            Information system engineer | Web Developer Frontend
          </p>
        </div>
        <div className='Container-Redes-info'>
          <a
            rel="noreferrer"
            href="https://github.com/ArleysGatica"
            target="_blank"
          >
            <img src={github} alt="Github" />
          </a>
          <a
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
          >
            <img src={gmail} alt="" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/arleys-gatica16/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="Container-whatsApp">
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+505 8634-9918"
            target="_blank"
          >
            <img src={whatsapp} alt="" />
            <button>+505 8634-9918</button>
          </a>
        </div>
      </div>
    </>
  );
};