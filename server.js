const express = require('express');
const bodyParser = require('body-parser');

const app = express();
module.exports = app;

const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle routes
const routes = require('./routes/routes.js')(app, fs);

// launch our server on port 3000.
const server = app.listen(3000, () => {
  console.log('listening on port %s...', server.address().port);
});
