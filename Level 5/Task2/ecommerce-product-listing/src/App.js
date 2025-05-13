import React, { useState } from "react";
import Product from "./components/Product";
import products from "./products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <header>
        <h1>Product Listing</h1>
        <div className="cart">
          🛒 Cart: <span>{cart.length}</span>
        </div>
      </header>

      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
