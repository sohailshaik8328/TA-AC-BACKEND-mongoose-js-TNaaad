let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    name : String,
    age : Number
})