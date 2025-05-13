import React, { useState, useEffect } from "react";

const LargeList = React.memo(() => {
    console.log("LargeList Rendered");

    const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

    return (
        <div>
            <h2>Large List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
});

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Optimized Component</h1>
            <p>Counter: {count}</p>
            <LargeList />
        </div>
    );
};

export default App;
