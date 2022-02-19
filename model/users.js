const { User } = require("../db/user.schema");

async function get_one_user({ userEmail, userPassword }) {
  //   const result = await UserModel.findOne({
  //     email: userEmail,
  //     password: userPassword,
  //   }).exec();
  //   return { success: !!result, user: result };
}

async function add_user(user) {
  //   const document = new NewUser(user);
  //   return await document.save();
}

async function get_all_users() {
  //   return await NewUser.find().exec();
}

async function getUser(uid) {
  return await User.findOne({
    userId: uid,
  }).exec();
}

async function saveUser(user) {
  const document = new User(user);
  return await document.save();
}

module.exports = {
  User,
  getUser,
  saveUser,
  add_user,
  get_one_user,
  get_all_users,
};
