const express = require('express');
const router = express.Router();
const OutageModel = require('../models/Outage');

router.get('/:id', (req, res) => {
    OutageModel.find({_id: req.params.id}, (err, outages) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(200).jsonp(outages);
        }
    });
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    OutageModel.findOneAndUpdate({_id: req.params.id},
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

router.post('/', (req, res) => {
    const outage = new OutageModel({
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

router.get('/', (req, res) => {
    const query = OutageModel.find({});
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

module.exports = router;

