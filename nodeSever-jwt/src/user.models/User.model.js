const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    select: false,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
