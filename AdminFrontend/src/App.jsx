import React from 'react'
import UpdateWarranty from './components/updateWarrantyStatus/UpdateWarranty'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
function App() {
  return (
   

    <BrowserRouter>
    <Navbar/>
    
  
    
    <div className="app-container">
     

      <Routes className='app-pages'>

        
        <Route path='/home' element={<h1>HOME...</h1>}/>
        <Route path='/comments' element={<h1>Comments...</h1>}/>
        <Route path='/' element={<UpdateWarranty/>}/>
      

    </Routes>
        
    </div>

   
    </BrowserRouter>






  )
}

export default App
