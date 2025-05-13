import React, { useState, useMemo, useCallback } from "react";

// Function to calculate prime numbers up to a given limit
const calculatePrimes = (limit) => {
  console.log("Calculating primes...");
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let div = 2; div * div <= num; div++) {
      if (num % div === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
};

const PrimeCalculator = ({ limit }) => {
  const primes = useMemo(() => calculatePrimes(limit), [limit]);

  return (
    <div>
      <h2>Prime Numbers up to {limit}</h2>
      <p>{primes.join(", ")}</p>
    </div>
  );
};

const App = () => {
  const [limit, setLimit] = useState(50);
  const [count, setCount] = useState(0);

  const handleIncreaseLimit = useCallback(() => {
    setLimit((prev) => prev + 10);
  }, []);

  const handleIncreaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Optimized Prime Number Calculator</h1>
      <PrimeCalculator limit={limit} />
      <button onClick={handleIncreaseLimit}>Increase Limit</button>
      <button onClick={handleIncreaseCount}>Increase Count ({count})</button>
    </div>
  );
};

export default App;
