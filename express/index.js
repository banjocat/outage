const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const Outage = mongoose.model('Outage',
    {
        title: {type: String, required: [true, 'Title required']},
        description: {type: String, required: [true, 'Description required']},
        state: {
            type: String,
            default: 'open',
            lowercase: true,
            validate: {
                validator: (v) => {
                    const choices = ['open', 'progress', 'closed'];
                    return choices.includes(v);
                },
                message: ['{VALUE} is not open|progress|closed']
            }
        }
    }
);

const app = express();
app.use(bodyParser.json());

const port = 3000;
app.get('/api/v1/outage', (req, res) => {
    Outage.find({}, (err, outages) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).jsonp(outages);
        }
    });
});

app.get('/api/v1/outage/:id', (req, res) => {
    Outage.find({_id: req.params.id}, (err, outages) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).jsonp(outages);
        }
    });
});

app.put('/api/v1/outage/:id', (req, res) => {
    Outage.findOneAndUpdate({_id: req.params.id},
        {state: req.body.state, description: req.body.description},
        {upsert: false, runValidators: true},
        (err) => {
            if (err) {
                res.status(500).send(err);
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
        } else {
            res.status(200).send('Added');
        }
    });
});


console.log(`Starting express on port ${port}`);
app.listen(port);
