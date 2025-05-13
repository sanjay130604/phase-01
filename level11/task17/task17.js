// Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Combine arrays
let combinedArray = [...array1, ...array2];

console.log("Combined Array:", combinedArray);

// Objects
let obj1 = { name: "Alice", age: 25 };
let obj2 = { city: "New York", job: "Engineer" };

// Combine objects
let combinedObject = { ...obj1, ...obj2 };

console.log("Combined Object:", combinedObject);

// Copy and modify array
let copiedArray = [...array1];
copiedArray.push(10);

console.log("Original Array:", array1);
console.log("Modified Copy:", copiedArray);
