// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <Routes>
                <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
};

export default App;
