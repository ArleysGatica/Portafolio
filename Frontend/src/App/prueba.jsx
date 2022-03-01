import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from './Services/Config-Firebase'

const Prueba = () => {
  useEffect(() => {

    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, 'Project'));
      data.forEach((documento) => {
        console.log(documento.data());
      });
    }
    obtenerDatos();
  }, []);

  return (
    <>
      <h1>firebase</h1>
    </>
  )
}
export default Prueba;