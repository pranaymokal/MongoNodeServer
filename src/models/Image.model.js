const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ImageSchema = new Schema({
    image :{
        type:String,
        required:true
    },
    imageCategory:{
        type:String,
        required:true
    },
    imageUploder:{
        type:String,
        required:false,
        default:"anonymous"
    },
    imageUploadDate:{
        type:Date,
        required:false,
        default: Date.now
    },
    imageUpdatedDate:{
        type:Date,
        required:false,
    },
    blogId : {type:Schema.Types.ObjectId , ref: 'Blog', required: false },
    eventId :{type:Schema.Types.ObjectId , ref: 'Event', required: false },
    recepieId :{type:Schema.Types.ObjectId , ref: 'Recepie', required: false },
    userId : { type:Schema.Types.ObjectId , ref: 'User', required: false},
});

module.exports = mongoose.model("Image", ImageSchema);