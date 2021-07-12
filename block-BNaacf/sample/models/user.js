let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String},
    age : {type : Number, default : 0},
    email : {type : String, lowercase : true},
    favorities : {type : [String]},
    marks : {type : [Numbers]},
    address : {
        village : {type : String},
        city : {type : String},
        state : {type : String},
        pin : {type : Number},
        user : Schema.Types.ObjectId,
    }
}) 