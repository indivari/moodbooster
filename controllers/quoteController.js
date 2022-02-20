const quotes = require("../model/quotes");
const quoteVotes = require("../model/quoteVotes");

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

exports.voteForQuote = async function (req, res) {
  const quoteId = req.params.quoteId;
  console.log("quoteId", quoteId);
  const { userId, vote } = req.body;
  const result = await quoteVotes.add_quote_vote({ quoteId, userId, vote });
  res.send(result);
};
