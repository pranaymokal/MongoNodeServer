const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventSchema = new Schema({
  eventName: { type: String, required: true, max: 120 },
  eventDescription: {
    type: String, required: true, max: 250 
  },
  eventCreatedDate: {
    type: Date,
    required: false,
    default : Date.now
  },
  eventStartDate: {
    type: Date,
    required: false
  },
  eventEndDate: {
    type: Date,
    required: false
  },
  eventLocation :{
    type: String ,
    required: false
   },
  userId : {type:Schema.Types.ObjectId , ref: 'User', required: false },
  eventStatus: { type: String , default : false },
  eventAdmins : [{ type: Schema.Types.ObjectId, ref: 'User',required:true}],
  eventImage : [{ type:Schema.Types.ObjectId , ref: 'Image', required: false }],
  eventParticipants : [ { type: Schema.Types.ObjectId, ref: 'User',required:true} ],
  eventLikes : { type: Number , required: false },
  eventDislikes : { type: Number , required: false },
  eventClosedGroup: {type : Boolean , required :false},
  eventHidden: { type: Boolean, required: false },
});

module.exports = mongoose.model("Event", EventSchema);