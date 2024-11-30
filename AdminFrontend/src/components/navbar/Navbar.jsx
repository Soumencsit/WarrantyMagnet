import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure your CSS file is correctly linked
import logo from '../../assets/logo.png'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
             <img src={logo}/>
          </NavLink>
       
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/comments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            COMMENTS
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/notify"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            NOTIFY
          </NavLink>
        </li>
       
        
      </ul>

      <div className="navbar-right">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-button" : "")}
        >
          <button  className="nav-button">
 
            Admin
          
          </button>
        
        </NavLink>
      
       
      </div>
    </nav>
  );
};

export default Navbar;


