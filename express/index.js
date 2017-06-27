require('dotenv').config('.env');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const OutageRoute = require('./controllers/Outage');
const UserRoute = require('./controllers/User');
const GithubAuth = require('./auth/Github');


const app = express();
//Setup the app
app.use(bodyParser.json());
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
      next();
});

app.use(session({
    secret: process.env.session_secret_key,
    resave: false,
    saveUnitialized: true
}));
app.use(GithubAuth.initialize());
app.use(GithubAuth.session()); 

// Routes
app.use('/api/v1/outage', OutageRoute);
app.use('/', UserRoute);


console.log(`Starting express on port ${process.env.express_port}`);
app.listen(process.env.express_port);
