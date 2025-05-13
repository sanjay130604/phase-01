import React, { useState } from "react";


const FetchData = () => {
    const [data, setData] = useState([]);

    // Function to fetch data using a callback
    const fetchData = (callback) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const mockData = [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
                { id: 3, name: "Charlie" }
            ];
            console.log("Data fetched successfully!");
            callback(mockData);
        }, 2000);
    };

    
    const handleData = (receivedData) => {
        console.log("Received data:", receivedData);
        setData(receivedData);
    };

    return (
        <div className="wholeContainer">
            <h2>Fetch Data Example</h2>
            <button onClick={() => fetchData(handleData)}>Fetch Data</button>
            <h3>Fetched Data:</h3>
            {data.length === 0 ? (
                <p>No data available.</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchData;
