// src/App.jsx
import React, { useState, useMemo, useCallback } from "react";
import "./App.css";

// Function to find prime numbers (expensive computation)
const findPrimes = (limit) => {
    console.log("Calculating primes...");
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        if (primes.every((prime) => num % prime !== 0)) {
            primes.push(num);
        }
    }
    return primes;
};

// Child component (memoized to prevent re-renders)
const ChildComponent = React.memo(({ generatePrimes }) => {
    console.log("ChildComponent Rendered");

    return (
        <button className="prime-button" onClick={generatePrimes}>
            Generate Primes
        </button>
    );
});

const App = () => {
    const [limit, setLimit] = useState(100);
    const [count, setCount] = useState(0);

    // Memoize expensive calculation
    const primeNumbers = useMemo(() => findPrimes(limit), [limit]);

    // Memoize event handler
    const generatePrimes = useCallback(() => {
        setLimit((prev) => prev + 10);
    }, []);

    return (
        <div className="app-container">
            <h1>Optimized Prime Finder</h1>
            <p className="counter">Counter: {count}</p>
            <button className="counter-button" onClick={() => setCount(count + 1)}>
                Increment Counter
            </button>
            <ChildComponent generatePrimes={generatePrimes} />
            <div className="prime-container">
                <h3>Primes up to {limit}:</h3>
                <p>{primeNumbers.join(", ")}</p>
            </div>
        </div>
    );
};

export default App;
