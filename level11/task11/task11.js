let numbers = [1, 2, 3, 4, 5];

let squared = numbers.map(num => num ** 2);
let oddNumbers = numbers.filter(num => num % 2 !== 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Squared Numbers:", squared);
console.log("Odd Numbers:", oddNumbers);
console.log("Sum of Numbers:", sum);

console.log("Numbers and their Square Roots:");
numbers.forEach(num => console.log(`${num}: ${Math.sqrt(num)}`));
