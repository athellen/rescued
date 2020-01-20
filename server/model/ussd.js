const mongoose = require("mongoose");
const { Schema } = mongoose;
const alert = new Schema({
phoneNumber: Number,
emergency: String,
location: String,
new:{type:Boolean, default:true},
time:{type: Date, default: new Date()}
});
module.exports = mongoose.model("Alert", alert);
