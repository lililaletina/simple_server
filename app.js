const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');

//const users = require('./users');


app.get('/', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) throw err;
    let output = JSON.parse(data);
    res.send(output);
  });
  
});

app.listen(port, () => {
  console.log(`Server has been started`)
});



