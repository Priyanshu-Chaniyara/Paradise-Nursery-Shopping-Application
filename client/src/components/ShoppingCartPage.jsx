import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cart/cartSlice";
import "./ShoppingCartPage.css";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalCost } = useSelector(
    (state) => state.cart
  );

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon! Checkout functionality will be available soon.");
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Your Shopping Cart</h1>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Shopping Cart</h1>

        <div className="cart-summary">
          <div className="summary-item">
            <span>Total Items: {totalQuantity}</span>
          </div>
          <div className="summary-item">
            <span>Total Cost: ${totalCost.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">Unit Price: ${item.price}</p>
                <p className="item-subtotal">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="item-controls">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn decrease"
                    onClick={() => handleDecreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn increase"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
