import React from 'react'
import { serviImages } from '../Services';
import './Modal.css'

export const ModalProject = (props) => {
  const {
    name,
    info,
    img
  } = props;

  return (
    <>
      <div className='modal-project'>
        <div className='container-modal'>
          <div className='titulo-modal'>
            <h1>
              {name}
            </h1>
          </div>
          <div className='modal-imgs'>
            <img src={img} alt="" />

          </div>
        </div>
        <div className='modal-text'>
          <h1>{info}</h1>
        </div>
      </div>
    </>
  )
}