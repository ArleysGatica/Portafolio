import React from 'react';
import './Studies.css';

export const Studies = () => {
  const Studiesimages = require.context('../../Images', true)
  return (
    <>
      <div className="Container-title-Studies">
        <h1>tapa</h1>
        <h1>Estudios</h1>
        <h1>s</h1>
      </div>
      <div className="Studies-Container">
        <img src={Studiesimages('./css-3.png')} alt="" />
      </div>
    </>
  );
}