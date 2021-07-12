import React, { FC } from 'react'
import './modal.scss'
import { useDispatch } from 'react-redux'
import { setIsModalOpen } from '../../store/actions'

type ModalProps = {
  url: string | undefined
}

const Modal: FC<ModalProps> = ({ url }: ModalProps): JSX.Element => {
  const dsp = useDispatch()

  return (
    <button className="modal" type="button" onClick={onModalHandler}>
      <div className="modal__img-container">
        <img src={url} className="modal__selected-img" alt="" />
        <img src={url} className="modal__back-img" alt="" />
      </div>
    </button>
  )

  function onModalHandler() {
    dsp(setIsModalOpen(false))
  }
}

export default Modal
