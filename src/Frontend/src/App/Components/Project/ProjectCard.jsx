import React from 'react'
import { Modal } from '../Modal/modal'
import { ModalProject } from './Modal-Project'
import { useModal } from '../Hook/hook'
import { serviImages } from '../Services'

export const ProjectCard = (props) => {
  const {
    name,
    info,
    id,
    img,
  } = props;


  const [isOpen, OpenModal, CloseModal] = useModal(false);

  return (
    <>
      <div className="Container-project">
        <div className="Project-title">
          <h1>{name}</h1>
        </div>
        <div className='Container-project-imgs'>
          <img src={img} alt="" />


        </div>
        <button onClick={OpenModal}>Info</button >
        <Modal isOpen={isOpen} CloseModal={CloseModal}>
          <ModalProject
            name={name}
            info={info}
            id={id}
            img={img}
          />
        </Modal>
      </div>
    </>
  )
}