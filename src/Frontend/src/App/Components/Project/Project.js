import React from 'react';
import ProjectsView from "./ProjectView";

export function ProjectC() {

  const data = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];

  return (
    <ProjectsView data={data} />
  );
};

