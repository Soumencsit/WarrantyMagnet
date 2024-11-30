import React from "react";
import axios from "axios"; // Import axios for API calls
import "./Card.css";
import defaultImg from "../../assets/product.jpeg"; // Default image
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
const Card = ({ product, onProductRemoved }) => {
  
  
  const {
    productName = "Unknown Product",
    billImageUrl,
    modelNumber = "N/A",
    description = "No description available.",
    price = 0,
    quantity = 0,
    purchaseDate,
    expiryDate,
    _id,
  } = product;
  console.log(product.billImageUrl);
  
 
  
  const navigate=useNavigate()

  // Function to handle product removal
  var loadingToast;
  const handleRemove = async () => {
    try {
      loadingToast = toast.loading("Removing your product...",{
        style: {
          backgroundColor:"#101820" , // Dark background
          color: "#FEE715",           // White text
          border: "1px solid #FEE715", // Optional border color
        },
      });
      console.log(_id);
      
      
      const response = await axios.post(
        'http://localhost:5002/user/product/deleteproduct', 
        { id: _id }, // Passing the product ID in the body
        

      );
    
      
      toast.dismiss(loadingToast);

      if (response.status === 200) {
        
       toast.success("Product Removed Successful")
        if (onProductRemoved) {
          onProductRemoved(_id); 
        }
        navigate('/mainproduct')
        
        window.location.reload();
      } else {
        toast.dismiss(loadingToast);
        toast.error("Failed to remove the product. Please try again.");
      }


    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Error removing product:", error);
      
      toast.error("Failed to remove the product. Please try again.")
     
      // alert("An error occurred while removing the product.");
    }
  };

  const handleUpdate=()=>{

    
    navigate(`/updateproduct/${_id}`)
  }

  return (
    <div className="product-card">
    <ToastContainer/>
      <div className="product-card-header">
        <h3>{productName}</h3>
      </div>
      <div className="product-image">
        <img
         src={`http://localhost:5002/uploads/${billImageUrl}`}
        //  https://warrantygaragebackend.onrender.com
          alt={productName}
          
        />
      </div>
      <div className="product-details">
        <div className="product-name">
          <span className="price">Name: {productName}</span>
          <span className="price">Model: {modelNumber}</span>
        </div>
        <p className="product-description">{description}</p>
        <div className="price-section">
          <span className="price">Price: ${price}</span>
          <span className="price">Quantity: {quantity}</span>
        </div>
        <div className="product-date">
          <span className="price">
            Purchase Date: {purchaseDate ? new Date(purchaseDate).toLocaleDateString() : "N/A"}
          </span>
          <span className="price">
            Expiry Date: {expiryDate ? new Date(expiryDate).toLocaleDateString() : "N/A"}
          </span>
        </div>
        <div className="product-actions">
          <button className="remove-btn" onClick={handleRemove}>
            Remove
          </button>
          <button
            className="update-btn"
            onClick={() => handleUpdate()}
         
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
