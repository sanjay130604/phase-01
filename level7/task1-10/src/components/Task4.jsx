import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const StorageComponent = () => {
    const [name, setName] = useLocalStorage("username", "");

    return (
        <div>
            <h1>Local Storage Example</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Stored Name: {name}</p>
        </div>
    );
};

export default StorageComponent;
