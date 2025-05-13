// src/VirtualList.jsx
import React from "react";
import { FixedSizeList as List } from "react-window";
import "./App.css";

const itemCount = 10000; // Large list of 10,000 items
const itemHeight = 50; // Fixed height for each item

const Row = ({ index, style }) => (
    <div className="list-item" style={style}>
        Item #{index + 1}
    </div>
);

const VirtualList = () => {
    return (
        <List
            height={500} // Viewport height
            itemCount={itemCount}
            itemSize={itemHeight}
            width={"100%"}
        >
            {Row}
        </List>
    );
};

export default VirtualList;
