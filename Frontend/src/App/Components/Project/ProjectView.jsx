import React from 'react'
import './Project.css'
import { ProjectCard } from './ProjectCard'

export const ProjectsView = ({ Datos }) => {
  console.log("🚀 ", { Datos })

  return (
    <>
      <div className='titulo'>
        <h1>
          Proyectos
        </h1>
      </div>
      <div className='container-print'>
        {Datos.map((project, index) => (
          <ProjectCard key={index}
            name={project.name}
            info={project.info}
            img={project.images}
            {...project}
          />
        ))}
      </div>
    </>
  )
}