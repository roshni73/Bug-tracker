import react from 'react'
import './BugList.css'
import Navbar from '../navBar/index.jsx';
import SideBar from '../sideBar/index.jsx';
import Button from '../button/index.jsx';

function bugList() {
    return (
    <>
    <div className="navbar">
          <Navbar/>
    </div>
    <div className="main-container">
        <div className="sidebar"><SideBar/></div>
        <div className="bug-list">
        <div classNaame="button"><Button/></div>
        
            <h2>Bug List</h2>
            
            <table>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Severity</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>UI Bug</td>
                    <td>High</td>
                    <td>hari</td>
                    <td>Open</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>API Bug</td>
                    <td>Low</td>
                    <td>shyam</td>
                    <td>Open</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>UI Bug</td>
                    <td>High</td>
                    <td>ram</td>
                    <td>Open</td>
                </tr>

            </table>
        </div> 
       
    </div>
    </>

    )
}

export default bugList;
