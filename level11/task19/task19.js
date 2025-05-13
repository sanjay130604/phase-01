function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function testFactorial(n) {
    try {
        console.log(`Factorial of ${n}:`, factorial(n));
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

testFactorial(5);
testFactorial(0);
testFactorial(7);
testFactorial(-3);
