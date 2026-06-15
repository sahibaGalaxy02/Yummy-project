import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm'>
      <div className='container'>
        <NavLink to="/" className='navbar-brand'>
          <h2 className='fw-bold'>Yummy<sub className='text-danger'>.</sub></h2>
        </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/About" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/Menu" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Menu</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/events" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Events</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/chefs" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Chefs</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/gallery" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </li>
          </ul>
          <div className="ms-auto">
            <NavLink to="/Booking" className="btn btn-danger rounded-pill px-4">
              Book a Table
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;