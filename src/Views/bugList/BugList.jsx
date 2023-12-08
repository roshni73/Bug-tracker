import './BugList.css'
import Navbar from '../NavBar/NavBar.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import React, { useState,useEffect } from 'react';

function BugList() {
    

    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);








   /*  function deleteItem(index) {
        const localStorageData = localStorage.getItem('formData');
         if (localStorageData) {
         let formDataArray = JSON.parse(localStorageData);
           formDataArray.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(formDataArray));
            setData(formDataArray);
       }
    }*/

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    
    const onAddSuccess = (arg) => {
        setData((oldValues) => [...oldValues, arg]);
        setIsOpen(false);
    }
    return (
    <>
        <div className="container"> 
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main-container">
                <div className="bug-list">
                   <div  className='add-button'>
                    <Button onClick={toggleModal} title="Report Bug"/>
                    </div>
                    <Modal isOpen={isOpen} closeModal={toggleModal} submitData={onAddSuccess}>
                    </Modal>
                    <h2>Bug List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Steps</th>
                                <th>Result</th>
                                <th>Status</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data && (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.steps}</td>
                                        <td>{item.actual}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button>View</button>
                                            <button>Edit</button>
                                            <button onClick={() => deleteItem(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    );
}

export default BugList;
