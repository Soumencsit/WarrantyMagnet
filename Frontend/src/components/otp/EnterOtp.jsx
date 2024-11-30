

import React, { useState, useRef,useContext } from 'react';
import './EnterOtp.css'
// import { Storecontext } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Storecontext } from '../../context/UserContext';
import { usePresence } from 'framer-motion';

function EnterOtp() {
  
  const [code, setCode] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);
  const { setLogin, userEmail,userName, password, setUserId} = useContext(Storecontext)
  const navigate=useNavigate();
  

  const handleInputChange = (e, index) => {
    const value = e.target.value;
  
    // Only allow numeric input and update if filled
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
  
      // Move focus to the next input if it's within bounds
      if (index < code.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    } else {
      toast.error("Only numeric values are allowed.");
    }
  };
  
  


  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];
  
      if (code[index] !== "") {
        newCode[index] = "";
        setCode(newCode);
      } else if (index > 0) {
        newCode[index - 1] = "";  // Clear the previous box's content
        setCode(newCode);
        inputsRef.current[index - 1]?.focus(); // Use optional chaining here as well
      }
    }
  };
  

 
  const handleSubmit = async (e) => {
  e.preventDefault();
  const otp = code.join(''); 


  if (code.includes("")) {
    toast.error("Please fill in all OTP fields.");
    return;
  }

  try {
    const loadingToast = toast.loading("Verifying your OTP...",{
      style: {
        backgroundColor:"#101820" , // Dark background
        color: "#FEE715",           // White text
        border: "1px solid #FEE715", // Optional border color
      },
    });
    const response = await axios.post('https://warrantygaragebackend.onrender.com/user/auth/verifyotp', {
      email:userEmail,
      otp
    });

    toast.dismiss(loadingToast);
   
    

    console.log(userName,userEmail,password);
    
    
    
    
    if (response.data.success) {
      
      

      try {
        const user = await axios.post('https://warrantygaragebackend.onrender.com/user/auth/signup', {
            username: userName,
            email: userEmail,
            password: password
        });
        console.log("this is",user);
        // setUserId(user.data._id)
      toast.success("Email verified successfully!",{
        
          style: {
            backgroundColor:"#101820" , // Dark background
            color: "#FEE715",           // White text
            border: "1px solid #FEE715", // Optional border color
          },
        });
      localStorage.clear()
      setLogin("true")
      
      navigate('/mainproduct'); 
      } 
      catch (error) {
          console.error('Error during signup:', error.response.data.message);
          navigate('/'); 
      }
    
     
      
      
    } 
    else {
      navigate('/'); 
     
    }
  } 
  catch (error) {
    toast.error("Failed to verify the code. Please try again.");
    navigate('/'); 
  }
};


  return (
    <div className="verify-email-container">
    <ToastContainer/>
      <h2>Verify your email</h2>
      <p>Enter the 8-digit code you have received on <strong>{userEmail}</strong></p>
      <form onSubmit={handleSubmit}>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="code-input"
              ref={(el) => (inputsRef.current[index] = el)} // Store reference to input element
            />
          ))}
        </div>
        <button type="submit" className="verify-button">VERIFY</button>
      </form>
    </div>
  );
}

export default EnterOtp;
