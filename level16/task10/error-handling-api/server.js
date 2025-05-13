const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// 🛑 Route that manually throws an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    err.status = 500;
    next(err); // Pass the error to the global error handler
});

// 🔍 Route that accesses a non-existent resource
app.get('/notfound', (req, res, next) => {
    next(new Error('Resource not found!'));
});

// ✅ Normal API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is some data' });
});

// 🌐 HTML Route (Serves a webpage)
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Express Error Handling Example</h1>');
});

// ❌ Custom 404 Middleware for Undefined Routes
app.use((req, res, next) => {
    res.status(404).send('<h2>404 Not Found</h2><p>The requested page does not exist.</p>');
});

// 🌎 Global Error Handler Middleware
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';

    if (req.headers.accept && req.headers.accept.includes('application/json')) {
        // API response
        res.status(statusCode).json({ error: errorMessage });
    } else {
        // HTML error page response
        res.status(statusCode).sendFile(path.join(__dirname, 'views', 'error.html'));
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
