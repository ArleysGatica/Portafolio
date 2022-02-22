import React from "react";

export const Footer = () => {
  const Footerimages = require.context('../../Images', true)
  return (
    <footer className="footer">
      <div className="container">
        <div className="Container-footer-red">
          <a
            rel="noreferrer"
            href="https://github.com/ArleysGatica"
            target="_blank"
          >
            <img src={Footerimages('./github.png')} alt="" />
          </a>
        </div>
        <div className="Container-footer-red">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/arleys-gatica16/"
            target="_blank"
          >
            <img src={Footerimages('./linkedin.png')} alt="" />
          </a>
        </div>
        <div className="Container-footer-red">
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+505 8634-9918"
            target="_blank"
          >
            <img src={Footerimages('./whatsapp.png')} alt="" />
            <button>+505 8634-9918</button>
          </a>
        </div>
        <div className="Container-pie">
          <p>
            &copy; Copyright 2020. Todos los derechos reservados.
            <a href="https://www.linkedin.com/in/jose-javier-gonzalez-gonzalez-a8a8b5b1/" target="_blank" rel="noopener noreferrer">
              <p className="fab fa-linkedin">mamamamamam</p>
            </a>
            <a href="
              " target="_blank" rel="noopener noreferrer">
              <p className="fab fa-github">putas</p>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};