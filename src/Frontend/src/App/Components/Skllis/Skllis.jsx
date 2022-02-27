import React from "react";
import "./Skllis.css";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiFigma, SiVisualstudiocode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";


export const Skllis = () => {
  const skllisimages = require.context('../../Images', true)
  return (
    <>
      <div className="Container-title-Skllis">
        <h1 >Proyectos</h1>
      </div>
      <div className="Skllis-Container">
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
        <img src={skllisimages('./react-pr.png')} alt="" />
      </div>
      <div className="Container-info">
        <h1 id='dev'>Conocimientos</h1>
        <h1 >DevTools</h1>
      </div>
      <div className="Container-main">
        <div className="Container-left">
          <div >
            <SiCsharp className="Icons" />
            <h4 className="h4">C-Sharp</h4>
          </div>
          <div>
            <FaReact className="Icons" />
            <h4 className="h4">React</h4>
          </div>
          <div>
            <FaNodeJs className="Icons" />
            <h4 className="h4">Node</h4>
          </div>
          <div>
            <IoLogoHtml5 className="Icons" />
            <h4 className="h4">HTML5</h4>
          </div>
          <div>
            <IoLogoCss3 className="Icons" />
            <h4 className="h4">CSS3</h4>
          </div>
          <div>
            <IoLogoJavascript className="Icons" />
            <h4 className="h4">JavaScript</h4>
          </div>
        </div>
        <div className="Container-right">
          <div>
            <BsGithub className="Icons2" />
            <h4 className="h4">Git</h4>
          </div>
          <div>
            <SiVisualstudiocode className="Icons2" />
            <h4 className="h4">Visual Code</h4>
          </div>
          <div>
            <SiFigma className="Icons2" />
            <h4 className="h4">Figma</h4>
          </div>
          <div>
            <IoLogoNpm className="Icons2" />
            <h4 className="h4">NPM</h4>
          </div>
        </div>
      </div>
    </>
  );
};