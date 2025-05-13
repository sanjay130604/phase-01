
const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  {
    id: 1,
    name: 'sanjay s',
    email: 'sanjay@2004.com',
  },
  {
    id: 2,
    name: 'vijay kumar',
    email: 'vijay@kumar.com',
  },
  {
    id: 3,
    name: 'ms dhoni',
    email: 'ms@dhoni.com',
  },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
