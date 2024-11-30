import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateProduct.css'; // Importing the CSS file
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";
import { FaCaretSquareLeft } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
function UpdateProduct() { 
  const { _id } = useParams();
  console.log("This is id",_id);
  const navigate=useNavigate()
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
    description: '',
  });
  const productId=_id
  const [loading, setLoading] = useState(true);

  // Fetch product data from the database
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const userId=productId
        
        const response = await axios.get(`https://warrantygaragebackend.onrender.com/user/product/getallproducts`, {
          params: { productId} // Using query parameters
        });
        console.log(response);
        
        const product = response.data.products;
        setFormData({
          productName: product.productName || '',
          brand: product.brand || '',
          quantity: product.quantity || '',
          price: product.price || '',
          modelNumber: product.modelNumber || '',
          purchaseDate: product.purchaseDate ? product.purchaseDate.split('T')[0] : '',
          expiryDate: product.expiryDate ? product.expiryDate.split('T')[0] : '',
          billImage: product.billImage||null,
          productImage:product.productImage|| null,
          description: product.description || '',
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        // alert('Failed to fetch product data');
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

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
    e.preventDefault(); // Prevent page reload on form submit
   
  
    
    
    const data = new FormData(); // Create a FormData instance
  
    // Append each form field to the FormData object
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });
  
    try {
      // console.log('Submitting data...');
   
     
      const loadingToast = toast.loading("Updating your product...",{
        style: {
          backgroundColor:"#101820" , // Dark background
          color: "#FEE715",           // White text
          border: "1px solid #FEE715", // Optional border color
        },
      });
      // Use FormData for multipart/form-data submission
      const response = await axios.post(
        `https://warrantygaragebackend.onrender.com/user/product/updateProduct/${productId}`,
        formData,
        {
          headers: { 'Content-Type': 'application/json' }, // Let Axios handle the boundary
        }
      );
      toast.dismiss(loadingToast);
    
      navigate('/mainproduct')
      // console.log('Response:', response.data);
    } catch (error) {
      console.error('Error updating product:', error);
      // alert('Failed to update product');
    }
  };
  


  if (loading) {
    return <div>Loading...</div>;
  }
  const handlePageChange=()=>{
    navigate('/mainproduct')
  }

  return (
    <div className="add-product-container">
    <ToastContainer/>
    <div className='add-product-container-top'>
      <button className='add-product-container-backbutton'
       onClick={()=>{handlePageChange()}}>
        <FaCaretSquareLeft size={30} />
      </button>

      <div className='add-product-header-div'>
      <h2 className="add-product-header">Update Product</h2>
      </div>


    </div>

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
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
