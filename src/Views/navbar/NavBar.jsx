
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
  return (
    <nav> 
    <div className="heading"><h1><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/window-bug.png" alt="window-bug"/>BugSentry</h1></div>
      <div className="navbar-content">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buglist">Bug List</Link></li>
      </ul>
      </div>
    </nav>
  );
}
export default Navbar;