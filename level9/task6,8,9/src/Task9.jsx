// src/App.jsx
import React from "react";
import VirtualList from "./VirtualList";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <h1>Virtual Scrolling Example</h1>
            <VirtualList />
        </div>
    );
};

export default App;
