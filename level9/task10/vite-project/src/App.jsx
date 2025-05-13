import React, { Suspense, lazy, useState, useMemo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LargeList from "./components/LargeList";

// Code splitting using React.lazy
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
  const [count, setCount] = useState(0);

  // Memoizing a computation-heavy operation
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 100;
  }, [count]);

  // Memoizing event handlers
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
      <div className="container">
        <h2>Performance Optimized Counter</h2>
        <p>Expensive Calculation Result: {expensiveCalculation}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
      <LargeList />
    </>
  );
};

export default App;
