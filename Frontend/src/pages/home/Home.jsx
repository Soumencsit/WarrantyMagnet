import React from 'react';
import './Home.css';
import bgimg from '../../assets/bgimg.jpg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Storecontext } from '../../context/UserContext';

function Home() {
    const{isLogin,setLogin}=useContext(Storecontext)
    const navigate=useNavigate()
    const handleMove=()=>{
        if(isLogin==='true'){
            navigate('/mainproduct')
        }
        else{
            navigate('/signin')
        }

       
    }
    return (
        <div className="home-container">
            <div className="home-left">
                <div className="home-text-container">
                    <p className="home-title">
                        Simple, profitable & sustainable warranty management
                    </p>
                    <p className="home-description">
                        Connect with your customers, improve efficiency, generate more revenue and reduce carbon emissions - all at once with iWarranty, an AI and machine learning powered warranty management system.
                    </p>
                </div>
                <button className="home-button" onClick={()=>{handleMove()}}>{isLogin==="true"?"My Product":"SignIn"}</button>
            </div>

            <div className="home-right">
                <img src={bgimg} alt="Warranty Management System" className="home-image"  />
            </div>
        </div>
    );
}

export default Home;
