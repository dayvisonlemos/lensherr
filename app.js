const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mutant = require('./src/mutant');
const stats = require('./src/stats');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(mutant);
app.use(stats);
module.exports = app;
