require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/budgetTracker')
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
    })
    .catch(err => console.log("❌ Error connecting to MongoDB:", err));

// Import routes
const transactionRoutes = require('./routes/Transaction');
app.use('/api/transactions', transactionRoutes);
