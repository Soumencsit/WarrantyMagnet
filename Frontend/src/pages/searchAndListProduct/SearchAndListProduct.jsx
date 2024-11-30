import React, { useState } from 'react';
import './SearchAndListProduct.css'; // Add a separate CSS file for styling
import ProductList from '../allProductList/ProductList';
import AddProduct from '../../components/addProduct/AddProduct';


function SearchAndListProduct() {
  const [activeButton, setActiveButton] = useState('list');
  
  
  


  return (
    <div className='SearchAndListProduct-container'>

      <div className='SearchAndListProduct-container-top'> 
        <button
          className={activeButton === 'list' ? 'active' : ''}
          onClick={() => setActiveButton('list')}
        >
          <strong>List Of Product</strong>
        </button>
        <button
          className={activeButton === 'search' ? 'active' : ''}
          onClick={() => setActiveButton('search')}
        >
          <strong>Add Product</strong>
        </button>
      </div>
      <div className='SearchAndListProduct-container-bottom'>
        {activeButton=='list'?<ProductList/>:<AddProduct/>}
      </div>

     
    



    </div>
  );
}

export default SearchAndListProduct;

