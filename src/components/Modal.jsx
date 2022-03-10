import React from 'react'
import '../styles/Modal.scss'

const Modal = ({ children }) => {
	return (
		<div className="modal">
      <div className='modal__container'>
        <button className='modal__close'></button>
  			{children}
      </div>
		</div>
	);
}

export default Modal
