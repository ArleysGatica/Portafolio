import React from 'react'
import { Modal } from '../Modal/modal'
import { ModalProject } from './Modal-Project'
import { useModal } from '../Hook/hook'

export const ProjectCard = ({ name, info, img }) => {
  console.log(img);

  const [isOpen, OpenModal, CloseModal] = useModal(false);
  return (
    <>
      <div className="Container-project">
        <div className="Project-title">
          <h1>{name}</h1>
        </div>
        <div className='Container-project-imgs'>
          <img src={img.length && img[0].img} alt="" />
        </div>
        <button onClick={OpenModal}>Info</button >
        <Modal isOpen={isOpen} CloseModal={CloseModal}>
          <ModalProject
            name={name}
            info={info}
            img={img.length && img[0].img}
          />
        </Modal>
      </div>
    </>
  )
}