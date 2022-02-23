import React from 'react';
import './Studies.css';

export const Studies = () => {
  const Studiesimages = require.context('../../Images/Certi', true)
  return (
    <>
      <div className="Container-title-Studies">
        <h1>Estudios</h1>
      </div>
      <div className="Studies-Container">
        <img src={Studiesimages('./Udemy3.png')} alt="" />
        <img src={Studiesimages('./react-pr.png')} alt="" />
        <img src={Studiesimages('./Asincrrono Js.png')} alt="" />
        <img src={Studiesimages('./udemy2.png')} alt="" />
        <img src={Studiesimages('./basica.png')} alt="" />
        <img src={Studiesimages('./certif.png')} alt="" />
        <img src={Studiesimages('./front.png')} alt="" />
        <img src={Studiesimages('./jdom.png')} alt="" />
        <img src={Studiesimages('./React-redux.png')} alt="" />
        <img src={Studiesimages('./Udemy.png')} alt="" />
        <img src={Studiesimages('./webpack.png')} alt="" />
      </div>
    </>
  );
}