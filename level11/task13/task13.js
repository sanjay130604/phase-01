let product = {
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true
};

let { name, price, category, inStock } = product;

console.log("Name:", name);
console.log("Price:", price);
console.log("Category:", category);
console.log("In Stock:", inStock);

function formatProduct({ name, price, category, inStock }) {
    return `Product: ${name}\nCategory: ${category}\nPrice: $${price}\nAvailable: ${inStock ? "Yes" : "No"}`;
}

console.log(formatProduct(product));
