import React, { useState,useContext } from 'react';
import axios from 'axios';
import './AddProduct.css'; // Importing the CSS file
import { Storecontext } from '../../context/UserContext';
import { IoMdCloudUpload } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
function AddProduct() {
  const { userId}=useContext(Storecontext)
  console.log(userId);
  
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    quantity: '',
    price: '',
    modelNumber: '',
    purchaseDate: '',
    expiryDate: '',
    billImage: null,
    productImage: null,
    description: '', // Added description to the initial state
  });
  const id=userId


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      const userId =  id; // Replace with the actual user ID
      const loadingToast = toast.loading("Adding your product, please wait...",{
        style: {
          backgroundColor:"#101820" , // Dark background
          color: "#FEE715",           // White text
          border: "1px solid #FEE715", // Optional border color
        },
      });
      const response = await axios.post(
        `http://localhost:5002/user/product/add/${userId}`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      toast.dismiss(loadingToast);

      toast.success("Product added successfully!", {
        style: {
          backgroundColor: "#101820", // Green background for success
          color: "#4F8A10",           // Green text
        },
      });
    
    

      // Clear the form after successful submission
      setFormData({
        productName: '',
        brand: '',
        quantity: '',
        price: '',
        modelNumber: '',
        purchaseDate: '',
        expiryDate: '',
        billImage: null,
        productImage: null,
        description: '', // Clear description
      });
    } catch (error) {
      
      toast.success("Failed to add product", {
        style: {
          backgroundColor: "#101820", // Green background for success
          color: "#D8000C",           // Green text
        },
      });
    
    }
  };

  return (
    <div className="add-product-container">
    <ToastContainer/>
    <div className='add-product-header-div'>    <h2 className="add-product-header">Add Product</h2></div>
      
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <input
            type="text"
            name="productName"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="brand"
            placeholder="Enter brand name"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>

        <div className='from-group-qt-p'>
          <div className="form-group">
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="modelNumber"
            placeholder="Enter model number"
            value={formData.modelNumber}
            onChange={handleChange}
          />
        </div>

        <div className='from-group-pd-ws'>
          <div className="form-group">
            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          {/* Description Field */}
          <textarea
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="description-field"
          />
        </div>

        <div className='form-group-image'>
        <div className="form-group">
          <label className="file-label">
            <input
              type="file"
              name="billImage"
              onChange={handleFileChange}
              className="file-input"
            />
         
            <span className="placeholder">
            {< IoMdCloudUpload size={25} color='#101820'/>}
              <p>
              Upload Bill
              </p>
             
                
             
            </span>
          </label>
        </div>
        <div className="form-group">
          <label className="file-label">
            <input
              type="file"
              name="productImage"
              onChange={handleFileChange}
              className="file-input"
            />
            <span className="placeholder">
            {< IoMdCloudUpload size={25} color='#101820'/>}
              <p>
              Product Image
              </p>
             
                
             
            </span>
          </label>
        </div>
      </div>


        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
