const express = require('express');
const app = express();

const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello world!');
});

console.log(`Starting express on port ${port}`);
app.listen(port);
