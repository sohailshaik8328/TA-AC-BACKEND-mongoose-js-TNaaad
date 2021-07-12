let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentSchema = new Schema({
    content : {type : String, required : true},
    article : {type : String, articles : articles},
    author : Schema.Types.ObjectId,
}, {timestamps : true});

let comment = mongoose.model('Comment', commentSchema);

module.exports = comment;

