let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, lowercase : true},
    age : {type : Number},
    author : Schema.Types.ObjectId,
}, {timestamps : true});

let user = mongoose.model('User', userSchema);

module.exports = user;

