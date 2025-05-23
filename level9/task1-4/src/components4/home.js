import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/login">Go to Login</Link> {/* ✅ Now Link is defined */}
        </div>
    );
};

export default Home;
