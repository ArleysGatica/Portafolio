import React from 'react'
import './Project.css'

export const ProjectsView = (props) => {
  const { data } = props

  console.log(data)
  return (
    <>
      <div className="Container-project">
        <div className="Project-title">
          <h1>{data}h</h1>
        </div>
      </div>
    </>
  )
}
