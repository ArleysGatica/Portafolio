import React from 'react';
import './Project.css';

export const Projectsview = props => {
  const { data } = props;

  return (
    <>
      <div className="Container-project">
        <div className="Project-title">
          <h1>{data}</h1>
        </div>
      </div>
    </>
  );
};

