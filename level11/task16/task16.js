function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log("Counter 1:", counter1()); // 1
console.log("Counter 1:", counter1()); // 2
console.log("Counter 2:", counter2()); // 1
console.log("Counter 1:", counter1()); // 3
console.log("Counter 2:", counter2()); // 2
