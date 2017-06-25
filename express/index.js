require('dotenv').config('.env');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const githubStrategy = require('passport-github2');
const User = require('./models/User.js');
const OutageRoute = require('./controllers/Outage.js');


const app = express();
//Setup the app
app.use(bodyParser.json());
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
      next();
});

// Routes
app.use('/api/v1/outage', OutageRoute);

console.log(`Starting express on port ${process.env.express_port}`);
app.listen(process.env.express_port);
