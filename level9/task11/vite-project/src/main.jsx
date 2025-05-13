// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import './assets/styles/styles.css'; // Import CSS file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18
root.render(<App />); // Render the App component
