import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure your CSS file is correctly linked
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { Storecontext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {isLogin,setLogin,userName}=useContext(Storecontext)
  const navigate=useNavigate();
  const[isSignIn,setSignIn]=useState('signin')
  // console.log( isLogin);
  
  const handelSignin=()=>{
    if(isLogin==="true"){
      
      setLogin("false")
     
      localStorage.clear()
    }
   
  }

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
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CONTACT
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/riview"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            REVIEW
          </NavLink>
        </li>
        {
          isLogin==="true" ? (
        
        <li className="navbar-item">
          <NavLink
             to="/mainproduct"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PRODUCT
          </NavLink>
        </li>)
        : null
        }
      </ul>

      <div className="navbar-right">

     
     
      
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "active-button" : "")}
        >
          <button  className="nav-button"
 
              onClick={()=>handelSignin()}>               
         
            {isLogin==="true" ?'Signout':'Signin'}
          
          </button>
        
        </NavLink>
        {
          isLogin==="true" ?'👋':'🔒'
        }
       
      </div>
    </nav>
  );
};

export default Navbar;

//=====================================================================================================
