const express = require('express');

const port = 1235;
const app = express();
module.exports = app;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);
