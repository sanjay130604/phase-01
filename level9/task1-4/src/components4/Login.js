import React from "react";
import { useAuth } from "../context/AuthContext"; // ✅ Ensure correct path
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth(); // ✅ Get the login function from context
    const navigate = useNavigate(); // ✅ Hook for navigation

    const handleLogin = () => {
        login(); // ✅ Call the login function
        navigate("/dashboard"); // ✅ Redirect after login
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button> {/* ✅ Now it exists */}
        </div>
    );
};

export default Login;
