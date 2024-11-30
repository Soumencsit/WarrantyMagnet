import React from 'react'
import { useContext } from 'react'
import './App.css'
import { LoginForm } from './components/accountBox/LoginForm'
import AccountBox from './components/accountBox'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterOtp from './components/otp/EnterOtp'

import SearchAndListProduct from './pages/searchAndListProduct/SearchAndListProduct'
import ProductList from './pages/allProductList/ProductList'
import AddProduct from './components/addProduct/AddProduct'
import UpdateProduct from './components/upadteProduct/UpdateProduct'

import { Storecontext } from './context/UserContext';
import Home from './pages/home/Home'
import About from './pages/about/About'
import CustomerReview from './pages/customerReview/CustomerReview'
import ContactForm from './pages/contact/ContactForm'
import { FaAvianex } from 'react-icons/fa'
import CommonPage from './pages/commonpage/CommonPage'
import Footer from './pages/footer/Footer'

function App() {
  const { isLogin } = useContext(Storecontext)
  // console.log(isLogin);
  
  return (
    
   
   

    <BrowserRouter>
    <Navbar/>
    
  
    
    <div className="app-container">
     

      <Routes className='app-pages'>

        <Route path="" element={<CommonPage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/riview' element={<CustomerReview/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        
        
        <Route path="/signin" element={ <AccountBox/>} />
        <Route path='/verifyemail' element={<EnterOtp/>}/>
        {isLogin?<Route path='/mainproduct' element={<SearchAndListProduct/>}/>:''}
        {isLogin? <Route path='/productlist' element={<ProductList/>}/>:''}
        {isLogin?<Route path='/addproduct' element={<AddProduct/>}/>:''}
        {isLogin?<Route path='/updateproduct/:_id' element={<UpdateProduct/>}/>:''}
    
      </Routes>
    </div>

    <Footer/>
    </BrowserRouter> 

   
    
  )
}

export default App


//=======================================================
