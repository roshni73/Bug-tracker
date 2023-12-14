import './BugList.css'
import Navbar from '../NavBar/NavBar.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import BugItem from '../BugItem/index.jsx';
import React, { useState, useEffect } from 'react';

function BugList() {
    const [data, setData] = useState(() => {
        const localStorageData = localStorage.getItem('formData');
        return localStorageData ? JSON.parse(localStorageData) : [];
    });
    
    const [isOpen, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [currentItem, setCurrentItem] = useState(null); 

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(data));
    }, [data]);

    const toggleModal = (action) => {
        setIsOpen(!isOpen);
        if (action !== 'edit') {
            setEditIndex(null);
            setCurrentItem(null);
          }
    };
    
    const onAddSuccess = (arg) => {
        if (editIndex !== null) {
            let newData = [...data];
            newData[editIndex] = arg;
            setData(newData);
            setEditIndex(null);
            setCurrentItem(null);
        } else {
            setData((oldValues) => [...oldValues, arg]);
        }
        setIsOpen(false);
    }

    const deleteItem = (index) => {
        let newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const editItem = (index) => {
        setEditIndex(index);
        setCurrentItem(data[index]);
        toggleModal('edit');
    };

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
                    <Modal isOpen={isOpen} closeModal={toggleModal} submitData={onAddSuccess} currentItem={currentItem}/>


                    <h2>Bug List</h2>
                    {data.length > 0 ? (
                          <table>
                          <thead>
                              <tr>
                                  <th>Id</th>
                                  <th>Project</th>
                                  <th>Title</th>
                                  <th>Description</th>
                                  <th>Priority</th>
                                  <th>Status</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {data.map((item, index) => (
                                  <BugItem item={item} index={index} editItem={editItem} deleteItem={deleteItem} submitData={onAddSuccess} />    
                              ))}
                          </tbody>
                      </table>
                    ) : (<p>No Data</p>)
                    }                       
                </div>
            </div>
        </div>
    </>
    );
}

export default BugList;