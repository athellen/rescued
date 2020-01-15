const mongoose = require("mongoose");
const { Schema } = mongoose;
const details = new Schema({
  username: { type: String },
  phonecontact: { type: Number },
  county: { type: String },
  subcounty: { type: String },
  address: { type: String },
  password: { type: String },
  confirmpassword: { type: String }
});
module.exports = mongoose.model("registration", details);
