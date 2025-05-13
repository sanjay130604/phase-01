let favoriteFoods = ["Pizza", "briyani", "dosa", "idly", "Tacos"];
favoriteFoods.push("Ice Cream");
favoriteFoods.shift();
let arrayLength = favoriteFoods.length;
let position = favoriteFoods.indexOf("Sushi");
let slicedArray = favoriteFoods.slice(1, 4);

console.log("Original Array:", favoriteFoods);
console.log("Array Length:", arrayLength);
console.log("Position of 'Sushi':", position);
console.log("Sliced Array:", slicedArray);
