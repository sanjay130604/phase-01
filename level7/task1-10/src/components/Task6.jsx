import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const TitleComponent = () => {
    const [count, setCount] = useState(0);

    // Update document title whenever count changes
    useDocumentTitle(`Count: ${count}`);

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default TitleComponent;
