// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

export default function Navbar() {
  return (
    <nav>
      <img src="/imgs/logo.png" alt="logo" height={50} />
      <input className="search-box" type='text' placeholder='Search'/>
      <ul className='navbar'>
        <li><Link className='nav-links' to="/">Home</Link></li>
        <li><Link className='nav-links' to="/connections">Connections</Link></li>
        <li><Link className='nav-links' to="/jobs">Jobs</Link></li>
        <li><Link className='nav-links' to="/message">Messaging</Link></li>
        <li><Link className='nav-links' to="/notification">Notification</Link></li>
        <li><Link className='nav-links' to="/company">Company</Link></li>
        <li><Link className='nav-links' to="/profile">Profile</Link></li>
        {/* <li><Link className='nav-links' to="/profile/edit">Edit Profile</Link></li> */}
      </ul>
    </nav>
  );
}