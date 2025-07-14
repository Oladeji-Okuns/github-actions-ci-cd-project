// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('&#128512; Hello from your GitHub Actions CI/CD App!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

