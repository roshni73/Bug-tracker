
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
  return (
    <nav> 
      <div className="heading"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/window-bug.png" alt="window-bug"/>BugSentry</div>
       <div className="navbar-content">
        <ul>
        <li><Link to="/"><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/control-panel.png" alt="control-panel"/>Dashboard</Link></li>
        <li><Link to="/buglist"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/ingredients-list.png" alt="ingredients-list"/>Bugs</Link></li>
        
      </ul>
    </div>
      <div className="login-logo">
       <li href ="#"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/guest-male.png" alt="guest-male"/>Roshani Poudel</li>
      </div>
      
  </nav>
  );
}
export default Navbar;