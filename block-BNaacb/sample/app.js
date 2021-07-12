let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'mongoose connected to database');
})

let app = express();

app.get('/', (req, res) => {
    res.send('Welcome back!')
})

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})