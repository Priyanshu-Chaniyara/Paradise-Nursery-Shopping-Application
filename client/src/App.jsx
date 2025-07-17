import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
