import React from 'react';
import './Home.css';
import { Perfil } from '../perfil/Perfil';
import SkllisJS from '../Components/Skllis/Skllis';
import { Footer } from '../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div className='Home-Container-Perfil'>
        <Perfil />
      </div>
      <div className='Home-Container-Skllis'>
        <SkllisJS />
      </div>
      <div className='info-text'>
        <span>
          Nicaragüense, nacido en la ciudad de Juigalpa, Chontales.
          <br />
          Soy programador de nivel Junior.
          <br />
          Una de mis mayores motivaciones es aprender, ser autodidacta, responsable en diseñar y desarrollar. Haber participado en desarrollo de proyectos en equipo con diferentes lenguajes de programacion y diversas tecnologias para el desarrollo de software o aplicaciones.
          Con amplitud a llenarme de mas conocimientos y habilidades. Cada dia trato de aprender algo nuevo; me mantengo siempre actualizado para poder lograr converirme en un Full-Stack developer.
        </span>
      </div>
      <div className='Home-Container-Footer'>
        <Footer />
      </div>
    </>
  );
};

export default Home;