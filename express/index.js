const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat',
    {
        name: String
    }
);

const kitty = new Cat({ name: 'Patrick' });

kitty.save( (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});


const app = express();

const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello world!');
});

console.log(`Starting express on port ${port}`);
app.listen(port);
