import React, { useState } from 'react';
import './index.css';

function ReportingForm() {
    <>
    <form onSubmit={handleSubmit} className="popup">\
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="popup-input" />
        <button onClick={togglePopup} className="popup-button">x</button>
         <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="popup-input" />
         <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} className="popup-input" />
         <input type="text" placeholder="Severity" value={severity} onChange={e => setSeverity(e.target.value)} className="popup-input" />
         <button type="submit" className="popup-button">Submit</button>
         
     </form>
    
    </>
}
export default ReportingForm;