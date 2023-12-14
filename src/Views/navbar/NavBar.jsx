
import React from 'react';
import './NavBar.css';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-brand'>Bug Tracker</div>
      <ul className='navbar-nav'>
      <li><a href='#Dashboard'>Dashboard</a></li>
      <li><a href='#bugs'>Bugs</a></li>
       
        
      </ul>
    </div>
  );
}
export default Navbar;