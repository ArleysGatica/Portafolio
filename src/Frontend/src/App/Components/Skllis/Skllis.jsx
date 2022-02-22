import React from "react";
import "./Skllis.css";

export const Skllis = () => {
  const skllisimages = require.context('../../Images', true)
  return (
    <>
      <div className="Container-title">
        <h1>Proyectos</h1>
      </div>
      <div className="Skllis-Container">
        <img src={skllisimages('./front.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./front.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
      </div>
      <div className="Container-info">
        <h1>Conocimientos</h1>
        <h1 >DevTools</h1>
      </div>
      <div className="Container-main">
        <div className="Container-left">
          <div className="conocimiento">
            <img src={skllisimages('./c-sharp.png')} alt="" />
            <h4 className="h4">C-Sharp</h4>
          </div>
          <div className="conocimiento">
            <img src={skllisimages('./reactb.png')} alt="" />
            <h4 className="h4">React</h4>
          </div>
          <div className="conocimiento">
            <img src={skllisimages('./node.png')} alt="" />
            <h4 className="h4">Node</h4>
          </div>
          <div className="conocimiento">
            <img src={skllisimages('./html-5.png')} alt="" />
            <h4 className="h4">HTML5</h4>
          </div>
          <div className="conocimiento">
            <img src={skllisimages('./css-3.png')} alt="" />
            <h4 className="h4">CSS3</h4>
          </div>
          <div className="conocimiento">
            <img src={skllisimages('./js.png')} alt="" />
            <h4 className="h4">JavaScript</h4>
          </div>
        </div>
        <div className="Container-right">
          <div className="Dev-1">
            <img src={skllisimages('./fgit.png')} alt="" />
            <h4 className="h4">Git</h4>
          </div>
          <div className="Dev-1">
            <img src={skllisimages('./visualcode.png')} alt="" />
            <h4 className="h4">Visual Code</h4>
          </div>
          <div className="Dev-1">
            <img src={skllisimages('./npm.png')} alt="" />
            <h4 className="h4">NPM</h4>
          </div>
        </div>
      </div>
      <h1>marios</h1>
    </>
  );
};