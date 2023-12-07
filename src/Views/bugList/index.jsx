import react from 'react'
import './BugList.css'
import Navbar from '../navBar/index.jsx';
import InputForm from '../InputForm/index.jsx';
import Button from '../Button/index.jsx';
import React, { useState, useEffect } from 'react';

function BugList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('bugs');
        if (localStorageData) {
            setData(JSON.parse(localStorageData));
        }
    }, []);

    return (
    <>
    <div className="navbar">
        <Navbar/>
        </div>
        <div className="main-container">
        <div className="bug-list">
        <div className="button"><Button/></div>
        <h2>Bug List</h2>
        <table>
            <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Severity</th>
                <th>Assigned To</th>
                <th>Status</th>
            </tr>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.severity}</td>
                    <td>{item.assignedTo}</td>
                    <td>{item.status}</td>
                </tr>
            ))}
        </table>
        </div> 
    </div>
    </>
    );
}

export default BugList;
