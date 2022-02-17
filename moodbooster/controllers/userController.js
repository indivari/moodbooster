const users = require("../model/users");

//GET one user
exports.one_user_get = function (req, res) {
  res.send(users.get_one_user());
  //   res.send("User List");
};

//GET all users
exports.users_all_get = async function (req, res) {
  const result = await users.get_all_users();
  res.send(result, 201);
  //   res.send("User List");
};

//POST new user
exports.create_user_post = async function (req, res) {
  //   const result = await users.add_user(req.body);
  //   res.send(result, 201);
};
