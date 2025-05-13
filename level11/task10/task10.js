let firstName = "Sanjay";
let lastName = "vijay";
let age = 20;

let sentence = `${firstName} ${lastName} is ${age} years old.`;

let multiLine = `Name: ${firstName} ${lastName}
Age in 5 years: ${age + 5}
Current Age: ${age}`;

let ageMessage = `${age >= 18 ? "You are an adult." : "You are a minor."}`;

console.log(sentence);
console.log(multiLine);
console.log(ageMessage);
