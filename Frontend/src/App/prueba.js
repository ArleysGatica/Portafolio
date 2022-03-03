import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from './Services/Config-Firebase'
import { ProjectsView } from './Components/Project/ProjectView'
import { serviImages } from './Components/Services'

const Prueba = () => {
  const [projects, setProjects] = useState([])
  const [images, setImages] = useState([])
  const imgs = [
    { img: serviImages('Ame2') },
    { img: serviImages('Medicall2') },
    { img: serviImages('tiendita2') },
    { img: serviImages('devP2') },
  ]
  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, 'Project'))
      data.forEach((documento) => {
        setProjects(projects => [documento.data()])
      })
      imgs.map((img) => {
        setImages(prevImg => [...prevImg, img])
      })
    }
    obtenerDatos();
  }, []);
  return (
    <>
      <ProjectsView Datos={projects} img={images} />
    </>
  )
}
export default Prueba;