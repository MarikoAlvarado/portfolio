'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/about-us', (request, response) => {
  response.send('i am the about us webpage');
});

app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

app.get('/api/cats/coolcat', (request, response) => {
  response.json({ cat: { name: 'cool cat', age: 30 } })
});

app.listen(PORT, () => {
  console.log('server up on port 3000');
});

