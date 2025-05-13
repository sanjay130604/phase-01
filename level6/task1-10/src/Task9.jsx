import React, { useState, useRef } from "react";

const InputComponent = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <input 
                ref={inputRef} 
                value={value} 
                onChange={handleChange} 
                placeholder="Enter your name" 
            />
            <button onClick={focusInput}>Focus Input</button>
            <p>Current Value: {value}</p>
        </div>
    );
};

export default InputComponent;
