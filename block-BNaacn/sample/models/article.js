let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : {type : String},
    description : {type : String},
    tags : [String],
    createdAt : {type : Date, default : new Date()},
    likes : {type : Number, default : 0}
})

let article = mongoose.model('Article', articleSchema);

module.exports = article;