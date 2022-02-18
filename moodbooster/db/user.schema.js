const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  token: String,
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

module.exports = {
  userSchema,
  User,
};
