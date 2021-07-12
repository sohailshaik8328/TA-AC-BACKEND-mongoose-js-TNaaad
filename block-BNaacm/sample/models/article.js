let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : {type : String},
    description : {type : String}
})

let article = mongoose.model("Article", articleSchema);

module.exports = article;