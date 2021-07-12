let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type : String},
    age : {type : Number}
})

let user = mongoose.model("User", userSchema);

module.exports = user;