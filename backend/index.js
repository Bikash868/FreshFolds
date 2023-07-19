const express = require('express');
const app = express();
const port = 8080;

app.get('/dummy', (req, res) => {
  res.send('This is a dummy endpoint');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
