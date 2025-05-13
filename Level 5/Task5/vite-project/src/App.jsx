import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [prevInput, setPrevInput] = useState("");
  const [result, setResult] = useState("");

  // Function to handle number click
  const handleNumberClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to handle operator click
  const handleOperatorClick = (op) => {
    if (input === "") return;
    setOperator(op);
    setPrevInput(input);
    setInput("");
  };

  // Function to calculate the result
  const calculateResult = () => {
    if (!prevInput || !input || !operator) return;
    
    let num1 = parseFloat(prevInput);
    let num2 = parseFloat(input);
    let res = 0;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }

    setResult(res);
    setInput(res.toString());
    setPrevInput("");
    setOperator(null);
  };

  // Function to clear calculator
  const clearCalculator = () => {
    setInput("");
    setPrevInput("");
    setOperator(null);
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        {result || input || "0"}
      </div>
      <div className="buttons">
        {[7, 8, 9, "/"].map((item) => (
          <button key={item} onClick={() => (typeof item === "number" ? handleNumberClick(item) : handleOperatorClick(item))}>
            {item}
          </button>
        ))}
        {[4, 5, 6, "*"].map((item) => (
          <button key={item} onClick={() => (typeof item === "number" ? handleNumberClick(item) : handleOperatorClick(item))}>
            {item}
          </button>
        ))}
        {[1, 2, 3, "-"].map((item) => (
          <button key={item} onClick={() => (typeof item === "number" ? handleNumberClick(item) : handleOperatorClick(item))}>
            {item}
          </button>
        ))}
        {[0, ".", "+", "="].map((item) => (
          <button key={item} onClick={() => (item === "=" ? calculateResult() : typeof item === "number" || item === "." ? handleNumberClick(item) : handleOperatorClick(item))}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={clearCalculator}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
