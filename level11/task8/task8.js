let person = {
    name: "Sanjay",
    age: 20,
    city: "New York",
    hobbies: ["Reading", "Traveling", "Gaming"]
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Hobbies:", person.hobbies);

person.job = "Software Developer";
console.log("Job:", person.job);

person.age = 30;
console.log("Updated Age:", person.age);

person.greet = function() {
    return `Hello, my name is ${this.name}!`;
};

console.log(person.greet());
