
import React from 'react';
import Button from '../Button/Button.jsx';

function BugItem({ item, index, editItem, deleteItem }) {
    return (
        <tr key={index}>
            <td>{index + 1} </td>
            <td>{item.project}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>{item.status}</td>
            <td>
                <Button onClick={() => editItem(index)} title="Edit" />
                <Button onClick={() => deleteItem(index)} title="Delete" />
            </td>
        </tr>
    );
}

export default BugItem;