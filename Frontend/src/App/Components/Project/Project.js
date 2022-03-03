import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../Services/Config-Firebase'
import { ProjectsView } from './ProjectView'

const ProjectFirebase = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, 'Project'))
      data.forEach((documento) => {
        setProjects(projects => [documento.data(), ...projects])
      })
    }
    obtenerDatos();
  }, []);

  return (
    <>
      <ProjectsView Datos={projects} />
    </>
  )
}
export default ProjectFirebase;