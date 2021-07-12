let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articlesSchema = new Schema({
    title : {type : String, required : true},
    description : {type : String},
    tags : {type : [String]},
    likes : {type : Number},
    author : Schema.Types.ObjectId,
    comments : {type : [String]},
}, {timestamps : true});

let articles = mongoose.model('Articles', articlesSchema);

module.exports = articles;

