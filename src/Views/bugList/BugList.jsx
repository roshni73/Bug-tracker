import './BugList.css'
import Navbar from '../NavBar/NavBar.jsx';
import Button from '../Button/Button.jsx';
import React, { useState, useEffect } from 'react';

function BugList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('formData');
        if (localStorageData) {
            setData(JSON.parse(localStorageData));
        }
    }, []);

    function deleteItem(index) {
        const localStorageData = localStorage.getItem('formData');
        if (localStorageData) {
            let formDataArray = JSON.parse(localStorageData);
            formDataArray.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(formDataArray));
            setData(formDataArray);
        }
    }

    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main-container">
                <div className="bug-list">
                    <Button setData={setData} />
                    <h2>Bug List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Steps</th>
                                <th>Result</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.steps}</td>
                                        <td>{item.actual}</td>
                                        <td>
                                            <button>View</button>
                                            <button>Edit</button>
                                            <button onClick={() => deleteItem(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className='centerText'>No records found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BugList;
