const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Custom middleware for logging requests
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample routes
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
