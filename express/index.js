const express = require('express');
var bodyParser = require('body-parser');
const passport = require('passport');
const githubStrategy = require('passport-github2');
const User = require('./models/User.js');
const Outage = require('./models/Outage.js');



const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
      next();
});

const port = 3000;
app.get('/api/v1/outage', (req, res) => {
    const query = Outage.find({});
    query.$where('this.state != "closed"');
    query.exec((err, outages) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).jsonp(outages);
        }
    });
});

app.get('/api/v1/outage/:id', (req, res) => {
    Outage.find({_id: req.params.id}, (err, outages) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).jsonp(outages);
        }
    });
});

app.put('/api/v1/outage/:id', (req, res) => {
    console.log(req.body);
    Outage.findOneAndUpdate({_id: req.params.id},
        {state: req.body.state, description: req.body.description},
        {upsert: false, runValidators: true},
        (err) => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
            } else {
                res.status(200).send('updated');
            }
        });
});

app.post('/api/v1/outage', (req, res) => {
    const outage = new Outage({
        title: req.body.title,
        description: req.body.description
    });
    outage.save( (err) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).send('Added');
        }
    });
});


console.log(`Starting express on port ${port}`);
app.listen(port);
