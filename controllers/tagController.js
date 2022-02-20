const tags = require("../model/tags");

//GET all users
exports.getAllTags = async function (req, res) {
  res.send(await tags.getAllTags());
};
