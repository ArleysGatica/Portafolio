import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";
import db from './Services/Config-Firebase'
import { ProjectsView } from './Components/Project/ProjectView'
import { serviImages } from './Components/Services';

const Prueba = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, 'Project'))
      data.forEach((documento) => {
        setProjects(projects => [documento.data()])
      })
    }
    obtenerDatos();
    console.log(projects);
  }, []);


  return (
    <ProjectsView Datos={projects} />
  )
}
export default Prueba;