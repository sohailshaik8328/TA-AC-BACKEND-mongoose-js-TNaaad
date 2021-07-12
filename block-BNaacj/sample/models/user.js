let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let useSchema = new Schema({
    password : {minlength : 5, maxlength : 15},
    createAt : {type : Date, default : new Date()}
})