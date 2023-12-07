import React from "react";
import './index.css';
import InputForm from '../InputForm/index.jsx';


function Modal({ isOpen, closeModal }) {
    if (!isOpen) {
      return null;
    }
  
  return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal}>X</button>
            <InputForm />
          </div>
         
        </div>
      );
    }

    export default Modal;