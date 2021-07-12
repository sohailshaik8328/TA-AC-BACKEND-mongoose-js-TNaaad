let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let useSchema = new Schema({
    password : {min : 5, max : 15},
    createAt : {type : Date, default : new Date()}
})