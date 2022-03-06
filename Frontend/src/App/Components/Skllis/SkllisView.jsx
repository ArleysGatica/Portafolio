import React from "react";
import "./Skllis.css";
export const SkllisView = ({ holis }) => {

  const skllisimages = require.context('../../Images/project', true)
  return (
    <>
      <div className="Container-title-Skllis">
        <h1 >Proyectos</h1>
      </div>
      <div className="padre">
        <div className="contenedor">
          <img src={skllisimages('./tiendita.png')} alt="" />
          <img src={skllisimages('./ame.png')} alt="" />
          <img src={skllisimages('./devP.png')} alt="" />
          <img src={skllisimages('./Medicall.png')} alt="" />
        </div>
      </div>
      <div className="Container-info">
        <h1 id='dev'>Conocimientos</h1>
      </div>
      <div className="Container-main">
        <div className="Container-left">
          {holis.map((holi) => {
            return (
              <div>
                <div className="Icons" >
                  {holi.icon}
                </div>
                <div className="h4">
                  <h4>{holi.title}</h4>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </>
  );
};