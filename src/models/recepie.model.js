const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let RecepieSchema = new Schema({
    recepieName: { type: String, required: true, max: 120 },
    recepieCategory: { type: String, required: true, max: 120 },
    recepieAuthor: { type: String, required: true, max: 120 },
    recepieCreated: { type: Date, required: true, default: Date.now },
    recepieContent: { type: String, required: true, max: 2048},
    recepieViews: { type: Number, required: false},
    recepieImage: [{ type:Schema.Types.ObjectId , ref: 'Image', required: false }],
    recepieLikes: { type: Number, required: false},
    recepieDislikes: { type: Number, required: false},
    recepieHidden: { type: Boolean, required: false},
    userId : { type:Schema.Types.ObjectId , ref: 'User', required: false },
    recepieUpdated: { type: Date, required: false},
});


module.exports = mongoose.model("Recepie", RecepieSchema);
