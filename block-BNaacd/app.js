let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String},
    email : {type : String, lowercase : true},
    age : {type : Number, 0}
})