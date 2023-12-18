import React from 'react'
import './Badge.css'

function Badge({icon, text , count}) {
    return (
        <div className="badge-container">
            <div className="badge">
                <i className={icon}></i>
                <p>{text}</p>
                <h1>{count}</h1>
            </div>
        </div>
    )
}

export default Badge