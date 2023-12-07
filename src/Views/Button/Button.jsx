
import React from 'react';
import Modal from '../Modal/Modal.jsx';
import './Button.css';

import { useState } from 'react';

function Button( {setData}) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="btn">
                <button onClick={togglePopup}>Add Bug </button>
            </div>
            <Modal isOpen={isOpen} closeModal={togglePopup} setData={setData}/>
        </div>
    );
}

export default Button;