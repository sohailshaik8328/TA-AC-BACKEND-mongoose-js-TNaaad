let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let addressSchema = new Schema({
    village : {type : String},
    city : {type : String, required : true},
    state : {type : String, required : true},
    pin : {type : Number},
    user : Schema.Types.ObjectId
}, {timestamps : true})

let address = mongoose.model('Address', addressSchema);

module.exports = address;