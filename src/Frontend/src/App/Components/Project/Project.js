import React from 'react'
import { ProjectsView } from './ProjectView'
import { serviImages } from '../Services'

export function ProjectC() {

  const arrayProjects = [
    {
      id: 1,
      name: 'American Cheast Pizza',
      info: 'Este es un proyecto de una pizzeria, que se llevo a cabo con el fin de realizar un software completo y de manera escaleble y de manera gusto para el usuario final. El proyecto se realizo en un par de meses, con llevando diferentes tecnologias y herramientas para el desarrollo de este proyecto; con React, Redux y Csharp.',
      img: serviImages('Ame2'),

    },

    {
      id: 2,
      name: 'Medicall',
      info: 'Este es un proyecto de una pagina web, que se llevo a cabo con el fin de realizar un software completo y de manera escaleble y de manera gusto para el usuario final. El proyecto se realizo en un par de meses, con llevando diferentes tecnologias y herramientas para el desarrollo de este proyecto; con React, Redux y Csharp.',
      img: serviImages('Medicall2'),
    },

    {
      id: 3,
      name: 'La Tiendita',
      info: 'Este es un proyecto de una pagina web, que se llevo a cabo con el fin de realizar un software completo y de manera escaleble y de manera gusto para el usuario final. El proyecto se realizo en un par de meses, con llevando diferentes tecnologias y herramientas para el desarrollo de este proyecto; con React, Redux y Csharp.',
      img: serviImages('tiendita2'),

    },

    {
      id: 4,
      name: 'DevCode',
      info: 'Holis',
      img: serviImages('devP2'),
    },
  ]

  return (
    <ProjectsView
      arrayProjects={arrayProjects}
    />
  );
};