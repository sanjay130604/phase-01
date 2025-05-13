import React from "react";
import FetchData from "./FetchData";
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';
import './App.css'
import ParallelFetcher from "./components/ParallelFetcher";

function App() {
    return (
        <div className="App">
            <FetchData />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
        </div>
    );
}

export default App;

