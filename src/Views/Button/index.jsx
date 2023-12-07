
import React from 'react';
import Modal from '../Modal/index.jsx';
import './button.css';

import { useState } from 'react';

 function Button() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="btn">
            <button  onClick={togglePopup}>Add Bug </button>
            </div>
            <Modal isOpen={isOpen} closeModal={togglePopup} />
        </div>
    );
}

  export default Button;