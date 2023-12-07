import React from "react";
import './Modal.css';
import InputForm from '../InputForm/InputForm.jsx';


function Modal({ isOpen, closeModal, setData }) {
    if (!isOpen) {
      return null;
    }
  
  return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal}>X</button>
            <InputForm  setData={setData}/>
          </div>
         
        </div>
      );
    }

    export default Modal;