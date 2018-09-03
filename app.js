const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mutant = require('./src/mutant');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(mutant);
module.exports = app;
