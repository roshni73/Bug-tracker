import React from "react";
import './Modal.css';
import InputForm from '../InputForm/InputForm.jsx';

function Modal(props) {
    const {
      isOpen,
      closeModal,
      submitData,
      currentItem
    } = props;
    
    if (!isOpen) {
      return null;
    }
    
    const onAddSuccess = (arg) => {
      submitData(arg);
    }
  return (

      <>
      <div className="modal-overlay">
                <div className="modal-content">
                  <div className="modal-heading">
                    <p className="reportingForm-heading"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bug--v1.png" alt="bug--v1"/>Bug ReportingForm</p>
                    <div className="btn"><button onClick={closeModal}>X</button></div>
                    </div>
                <InputForm onAddSuccess={onAddSuccess} currentItem = {currentItem} />
                </div>
      </div>
        
      </>   
);
    }

    export default Modal;