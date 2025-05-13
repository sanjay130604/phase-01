const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

// Middleware
app.use(express.json()); // for parsing application/json

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Route mounting
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Optional: catch-all error handler
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
