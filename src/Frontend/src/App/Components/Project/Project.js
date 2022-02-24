import React from 'react';
import { Projectsview } from './Project';

export const ProjectC = () => {

  const data = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];

  return (
    <div>
      <Projectsview data={data} />
    </div>
  );
}

