const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CommentSchema = new Schema({
    commentText:{
        type:String,
        required:true
    },
    commentAuthor:{
        type:String,
        required:false,
        default:"anonymous"
    },
    commentlikes : {type:[String],required : false},
    commentDislikes : {type:[String],required : false},
    blogId : {type:Schema.Types.ObjectId , ref: 'Blog', required: false },
    eventId :{type:Schema.Types.ObjectId , ref: 'Event', required: false },
    userId : {type:Schema.Types.ObjectId , ref: 'User', required: false },
    recepieId :{type:Schema.Types.ObjectId , ref: 'Recepie', required: false },
    commentAdded : {
        type:Date,
        required:false,
        default: Date.now
    },
    commentUpdated:{
        type:Date,
        required:false,
    }
});

module.exports = mongoose.model("Comment", CommentSchema);
