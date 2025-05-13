import React from "react";
import { useParams } from "react-router-dom";

const products = [
    { id: 1, name: "Laptop", price: "$999", description: "High-performance laptop with 16GB RAM." },
    { id: 2, name: "Smartphone", price: "$499", description: "Latest model with a powerful camera." },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-canceling over-ear headphones." }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
