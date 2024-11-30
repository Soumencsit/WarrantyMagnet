import React from 'react'
import Home from '../home/Home'
import About from '../about/About'
import ContactForm from '../contact/ContactForm'
import CustomerReview from '../customerReview/CustomerReview'
import './CommonPage.css'
function CommonPage() {
  return (
    <div className='commonpage-container'>
    <Home />
    <About />
    <CustomerReview/>
    <ContactForm/>
      
    </div>
  )
}

export default CommonPage
