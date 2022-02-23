import React from "react";
import "./Footer.css";

export const Footer = () => {
  const Footerimages = require.context('../../Images', true)
  return (
    <footer className="footer">
      <div className="container">
        <div className="Container-footer-whatsapp">
          <h4 id='Sobremi' >¿Alguna Duda? Contactame...</h4>
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+505 8634-9918"
            target="_blank"
          >
            <button>(+505) 8634-9918</button>
          </a>
        </div>
        <div className="Container-footer-red">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/arleys.gatica.34"
            target="_blank"
          >
            <img src={Footerimages('./facebook.png')} alt="" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/arleys-gatica16/"
            target="_blank"
          >
            <img src={Footerimages('./linkedin.png')} alt="" />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/ArleysGatica"
            target="_blank"
          >
            <img src={Footerimages('./github.png')} alt="Github" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/arleyssss_16/"
            target="_blank"
          >
            <img src={Footerimages('./instagram.png')} alt="" />
          </a>


        </div>
      </div>
      <div className="Container-pie">
        <p>
          &copy; Copyright 2022. Designed by El_Nicho.
        </p>
      </div>
    </footer>
  );
};