import React from 'react';
import './Home.css';
import { Header } from '../Components/Header/Header';
import { Perfil } from '../perfil/Perfil';
import { Skllis } from '../Components/Skllis/Skllis';

const Home = () => {
  return (
    <>
      <div className='Home-Container-Header'>
        <Header />
      </div>
      <div className='Home-Container-Perfil'>
        <Perfil />
      </div>
      <div className='Home-Container-Skllis'>
        <Skllis />
      </div>
    </>
  );
};

export default Home;