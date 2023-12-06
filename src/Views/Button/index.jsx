
import React from 'react';
import ReportingForm from '../ReportingForm';
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

            {isOpen && (
                <form onSubmit={handleSubmit} className="popup">
                    <button onClick={togglePopup}>X</button>
                    <input type="text" placeholder="Title"  className="popup-input" />
                    <input type="text" placeholder="Description"  className="popup-input" />
                    <input type="text" placeholder="Status"  className="popup-input" />
                    <input type="text" placeholder="Severity"  className="popup-input" />
                    <button type="submit">Submit</button>
                   
                </form>
            )}
        </div>
    );
}

  export default Button;