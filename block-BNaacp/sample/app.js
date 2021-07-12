let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/user');

// mongoose connector
mongoose.connect('mongodb://localhost/sample',{useNewUrlParser : true, useUnifiedTopology : true}, (err) => {
    console.log(err ? err : 'mongoose connected to database');
})

//instansiate
let app = express();


//midlewares
app.use(express.json());


//routes
app.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.get('/users', (req, res) => {
    User.find({}, (err, user) => {
        console.log(err);
        res.json({users : user});
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    User.find({_id : id}, (err, user) => {
        console.log(err);
        res.json(user);
    })
    
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findOne({_id : id}, (err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    User.updateOne({_id : id},req.body, {new : true}, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    })
})

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new : true}, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    })
})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, req.body, (err, deletedUser) => {
        console.log(err);
        res.send('user deleted');
        res.json(deletedUser);
    })
})

//error handlers
app.use((req, res) => {
    res.send('Page not found');
})

app.use((err, req, res, next) => {
    res.send(err);
    next();
})


//server listener
app.listen(3000, () => {
    console.log('server is listening at port 3k');
})