const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  password: String,
  token: String,
  profilePhoto: String,
});

const User = mongoose.model("users", userSchema);

module.exports = {
  userSchema,
  User,
};
