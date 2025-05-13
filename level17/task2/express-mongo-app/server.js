const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // ⬅️ Import route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json()); // Needed to parse JSON in POST requests

// MongoDB connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/user', userRoutes); // ⬅️ Mount route

// Root route
app.get('/', (req, res) => {
    res.send('API is working');
});

// Server start
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
