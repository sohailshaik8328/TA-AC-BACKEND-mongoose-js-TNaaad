let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String},
    email : {type : String, lowercase : true},
    age : {type : Number, default : 0},
    password : {minlength : 5},
    createdAt : {type : Date, default : new Date()},
    favourities : {type : [String]}
}, {timestamps : true})

let user = mongoose.model('User', userSchema);

module.exports = user;