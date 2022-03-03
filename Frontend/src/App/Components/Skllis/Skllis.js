import React from 'react';
import { SkllisView } from './SkllisView';

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiFigma, SiVisualstudiocode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";


const SkllisJS = () => {
  const icons = [
    {
      icon: <IoLogoHtml5 />,
      title: 'HTML5'
    },
    {
      icon: <IoLogoCss3 />,
      title: 'CSS3'
    },
    {
      icon: <IoLogoJavascript />,
      title: 'Javascript'
    },
    {
      icon: <IoLogoNpm />,
      title: 'NPM'
    },
    {
      icon: <FaNodeJs />,
      title: 'NodeJS'
    },
    {
      icon: <FaReact />,
      title: 'React'
    },
    {
      icon: <SiCsharp />,
      title: 'C#'
    },
    {
      icon: <SiFigma />,
      title: 'Figma'
    },
    {
      icon: <SiVisualstudiocode />,
      title: 'Visual Studio Code'
    },
    {
      icon: <BsGithub />,
      title: 'Github'
    }
  ];

  return (<SkllisView holis={icons} />
  );
}

export default SkllisJS;