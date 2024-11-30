import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/productCard/Card";
import './ProductList.css';
import { Storecontext } from '../../context/UserContext';

function ProductList() {
  const { userId } = useContext(Storecontext); // Accessing userId from context
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Send userId as a query parameter
        const response = await axios.get(`https://warrantygaragebackend.onrender.com/user/product/getallproducts`, {
          params: { userId } // Using query parameters
        });

        const data = response.data.products.map((product) => {
          if (product.billImageUrl) {
            const match = product.billImageUrl.match(/[^\\/]+$/);
            product.billImageUrl = match ? match[0] : null;
          }
          return product;
        });

        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    if (userId) {
      fetchProducts();
    }
  }, [userId]); // Fetch products when userId changes

  // Handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(query);

    const rankedProducts = products.map((product) => {
      const { productName = '', brand = '', modelNumber = '', date = '' } = product;

      const nameMatch = productName.toLowerCase().includes(query);
      const brandMatch = brand.toLowerCase().includes(query);
      const modelMatch = modelNumber.toLowerCase().includes(query);
      const dateMatch = date.toLowerCase().includes(query);

      const relevance =
        (nameMatch ? 3 : 0) +
        (brandMatch ? 2 : 0) +
        (modelMatch ? 2 : 0) +
        (dateMatch ? 1 : 0);

      return { ...product, relevance };
    });

    const sortedProducts = rankedProducts.sort((a, b) => b.relevance - a.relevance);
    setFilteredProducts(sortedProducts);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredProducts(products);
  };

  return (
    <div className="product-list-container">
      {/* Search Box with Clear Button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className={`search-box ${isActive ? 'active' : ''}`}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        {searchQuery && (
          <button
            className="clear-button"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        )}
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
