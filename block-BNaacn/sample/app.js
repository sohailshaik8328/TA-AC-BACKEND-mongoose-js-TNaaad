let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'mongoose connected to server');
})

let app = express();

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})