// src/Products.jsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./App.css";

const productList = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Phone", category: "Electronics", price: 500 },
    { id: 3, name: "Shoes", category: "Fashion", price: 80 },
    { id: 4, name: "Jacket", category: "Fashion", price: 120 },
    { id: 5, name: "Tablet", category: "Electronics", price: 300 },
];

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    const [category, setCategory] = useState(searchParams.get("category") || "");
    const [price, setPrice] = useState(searchParams.get("price") || "");

    const handleSearch = (e) => {
        e.preventDefault();
        const params = {};
        if (searchTerm) params.search = searchTerm;
        if (category) params.category = category;
        if (price) params.price = price;
        setSearchParams(params);
    };

    // Filter products based on query parameters
    const filteredProducts = productList.filter((product) => {
        return (
            (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
            (category ? product.category === category : true) &&
            (price ? product.price <= parseInt(price) : true)
        );
    });

    return (
        <div className="container">
            <h2>Product Search</h2>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                </select>
                <input
                    type="number"
                    placeholder="Max Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <h3>Results</h3>
            <ul className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price} ({product.category})
                        </li>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </ul>
        </div>
    );
};

export default Products;
