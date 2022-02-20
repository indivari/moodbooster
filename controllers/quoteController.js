const quotes = require("../model/quotes");
const quoteVotes = require("../model/quoteVotes");

//GET all users
exports.quotes_all_get = async function (req, res) {
  const tag = req.query.tag;
  console.log("tag is", tag);

  if (!tag) {
    res.send(await quotes.get_all_quotes());
  } else {
    res.send(await quotes.getQuotesHavingTag(tag));
  }
};

//POST new quote
exports.create_quote_post = async function (req, res) {
  // const { content } = req.body;
  // Find all the tags in content
  // const tags = findTags(content);

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
