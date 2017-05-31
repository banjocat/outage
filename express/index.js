const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

/*
            {id: 1, name: 'Simple Outage', fields: [
                {id: 1, type: 'TextField',
                    name: 'title',
                    hintText: 'Outage Title',
                    errorText: 'This field is required'
                },
                {id: 2,
                    type: 'TextField',
                    name: 'short-descritpion',
                    multiLine: true,
                    hintText: 'Outage Short Description',
                    errorText: 'This field is required'
                },
            ]
            },
            */
const outageTemplate = mongoose.model('outageTemplate',
    {
        name: String,
        fields: [
            {
                type: String,
                hintTest: String,
                errorText: String,
                muliLine: Boolean
            }
        ]
    }
);


const app = express();

const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello world!');
});

console.log(`Starting express on port ${port}`);
app.listen(port);
