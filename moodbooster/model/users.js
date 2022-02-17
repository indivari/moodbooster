const mongoose = require("mongoose");
const { Schema } = mongoose;
const { userSchema } = require("../db/user.schema");

const UserModel = mongoose.model("users", userSchema);

async function get_one_user({ userEmail, userPassword }) {
  const result = await UserModel.findOne({
    email: userEmail,
    password: userPassword,
  }).exec();

  return { success: !!result, user: result };
}

async function add_user(user) {
  //   const document = new NewUser(user);
  //   return await document.save();
}

async function get_all_users() {
  //   return await NewUser.find().exec();
}
module.exports = {
  UserModel,
  add_user,
  get_one_user,
  get_all_users,
};
