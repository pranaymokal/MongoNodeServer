
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let BlogSchema = new Schema({
  blogName : {
    type: String,
    required: true
  },
  blogContent : {
    type: String,
    required: true
  },
  blogCategory : {
    type: String,
    required: true
  },
  blogAuthor : {
    type: String,
    required: false,
    default: "anonymous"
  },
  userId : {type:Schema.Types.ObjectId , ref: 'User', required: false },
  blogComments: [{ type:Schema.Types.ObjectId , ref: 'Comment', required: false }],
  blogTags: [{type:[String],required:false }],
  blogLikes : { type: [String], required: false },
  blogDislikes : { type: [String], required: false },
  blogRating : [{ type: Number, min: 0, max: 5, required: false }],
  //blogImage : [{ type:Schema.Types.ObjectId , ref: 'Image', required: false }],
  blogCreated : {
    type: Date,
    required: false,
    default: Date.now
  },
  blogPublished : {
    type: Date,
    required: false,
  },
  blogUpdated : {
    type: Date,
    required: false,
    default: Date.now
  },
  blogHidden: {
    type: Boolean ,
    required: false
  },
  blogFavorite : {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model("Blog", BlogSchema);
