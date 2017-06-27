require('dotenv').config('.env');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const OutageRoute = require('./controllers/Outage');
const Github = require('./auth/Github');


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

// Auth
app.use(Github.initialize());

// Routes just for auth
app.get('/auth/github',
  Github.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  Github.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
      console.log('login completed.. redirect');
      res.redirect('/api/v1/outage');
  });


console.log(`Starting express on port ${process.env.express_port}`);
app.listen(process.env.express_port);
