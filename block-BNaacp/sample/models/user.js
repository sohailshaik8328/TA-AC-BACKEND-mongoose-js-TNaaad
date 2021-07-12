let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String},
    email : {type : String, lowercase : true},
    sports : {type : [String]}
}, {timestamps : true});

let user = mongoose.model('User', userSchema);

module.exports = user;