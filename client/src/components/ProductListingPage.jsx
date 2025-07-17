import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { plantsData, categories } from "../data/plantsData";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlants =
    selectedCategory === "All"
      ? plantsData
      : plantsData.filter((plant) => plant.category === selectedCategory);

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing-page">
      <div className="container">
        <h1 className="page-title">Our Beautiful Plants</h1>

        {/* Category Filter */}
        <div className="category-filter">
          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All Plants
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="product-card">
              <div className="product-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-category">{plant.category}</p>
                <p className="product-price">${plant.price}</p>
                <p className="product-description">{plant.description}</p>
                <button
                  className={`add-to-cart-btn ${
                    isInCart(plant.id) ? "disabled" : ""
                  }`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
