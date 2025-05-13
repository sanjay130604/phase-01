// app.js

const express = require('express');
const app = express();
const PORT = 3100;

// Route that handles query parameters
app.get('/search', (req, res) => {
  const query = req.query.q || 'none';         // default to 'none' if not provided
  const limit = req.query.limit || 5;          // default to 5 if not provided

  res.send(`Search for: ${query}, Limit: ${limit}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
