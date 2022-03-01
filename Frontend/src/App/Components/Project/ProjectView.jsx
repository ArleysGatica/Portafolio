import React from 'react'
import './Project.css'
import { ProjectCard } from './ProjectCard'

export const ProjectsView = (props) => {
  const { obtenerDatos } = props

  return (
    <>
      <div className='titulo'>
        <h1>
          Proyectos
        </h1>
      </div>
      <div className='container-print'>
        {obtenerDatos.map((project, index) => (
          <ProjectCard key={index}
            name={project.name}
            info={project.info}
            id={project.id}
            img={project.img}
          />
        ))}
      </div>

    </>
  )
}