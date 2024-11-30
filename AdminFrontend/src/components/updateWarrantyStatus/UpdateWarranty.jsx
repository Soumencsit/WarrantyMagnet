import React from 'react';
import axios from 'axios';
import './UpdateWarranty.css'; // Import the CSS file

function UpdateWarranty() {
  const handleUpdateWarranty = async () => {
    try {
      // Make API call
      const response = await axios.post(
        'https://warrantygaragebackend.onrender.com/api/warranty/update-warranty'
      );
      // Handle success
      alert(`API Response: ${response.data.message || 'Update Successful'}`);
    } catch (error) {
      // Handle error
      console.error('Error updating warranty:', error);
      alert('Failed to update warranty. Please try again.');
    }
  };

  return (
    <div className="update-warranty-container">
      <button className="update-warranty-button" onClick={handleUpdateWarranty}>
        Update Warranty
      </button>
    </div>
  );
}

export default UpdateWarranty;
