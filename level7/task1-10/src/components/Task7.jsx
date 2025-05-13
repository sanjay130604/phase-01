import React from "react";
import useWindowResize from "../hooks/useWindowResize"; 

const WindowSizeComponent = () => {
    const { width, height } = useWindowResize();

    return (
        <div style={styles.container}>
            <h2>Current Window Size</h2>
            <p>Width: <strong>{width}px</strong></p>
            <p>Height: <strong>{height}px</strong></p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        maxWidth: "300px",
        margin: "auto"
    }
};

export default WindowSizeComponent;
