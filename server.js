const express = require('express');
const superagent = require('superagent');

require('dotenv').config();

const port = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => res.send('Hello World!') );

app.listen( port, () => console.log(`Listening on port ${port}...`) );