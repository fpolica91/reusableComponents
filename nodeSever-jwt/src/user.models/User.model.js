const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    // type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
