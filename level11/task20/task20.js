function operateOnArray(arr, operation) {
    return arr.map(operation);
}

function doubleNumber(num) {
    return num * 2;
}

function squareNumber(num) {
    return num ** 2;
}

function numberToString(num) {
    return num.toString();
}

let numbers = [1, 2, 3, 4, 5];

console.log("Doubled:", operateOnArray(numbers, doubleNumber));
console.log("Squared:", operateOnArray(numbers, squareNumber));
console.log("Stringified:", operateOnArray(numbers, numberToString));
