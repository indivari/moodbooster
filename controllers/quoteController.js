const quotes = require("../model/quotes");

//GET all users
exports.quotes_all_get = async function (req, res) {
  res.send(await quotes.get_all_quotes());
  //   res.send("User List");
};

//POST new quote
exports.create_quote_post = async function (req, res) {
  const result = await quotes.add_quote(req.body);
  res.send(result, 201);
};
