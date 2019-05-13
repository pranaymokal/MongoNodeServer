const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let UserSchema = new Schema({
  firstName : { type: String, required: true, max: 100 },
  lastName : { type: String, required: true, max: 100 },
  username: { type: String, required: true, max: 100 },
  userBio: { type: String, required: false },
  userWebsite: { type: String, required: false },
  gender: { type: String, required: false, max: 100 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: false },
  followed : {type: [String],required:false},
  following : {type : [String],required:false},
  profilePhoto: { type:Schema.Types.ObjectId , ref: 'Image', required: false },
  profileWallpaper :{ type:Schema.Types.ObjectId , ref: 'Image', required: false },
  dateofbirth : {type:Date , required: false}, 
  userAdmin: {
    type: Boolean,
    default: false
  },
  registerDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  loginDate: {
    type: Date,
    required: false
  },
  updatedDate: {
    type: Date,
    required: false
  },
  userRole :{
    type: String, 
    required: true
  },
  userPermission :{
    type: String, 
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
