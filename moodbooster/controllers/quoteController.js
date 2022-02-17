const quotes = require("../model/quotes");

//GET all users
exports.quotes_all_get = function (req, res) {
  res.send(quotes.get_all_quote());
  //   res.send("User List");
};

//POST new quote
exports.create_quote_post = async function (req, res) {
  //   const result = await users.add_user(req.body);
  //   res.send(result, 201);
};
