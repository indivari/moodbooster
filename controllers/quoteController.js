const quotes = require("../model/quotes");
const quoteVotes = require("../model/quoteVotes");

//GET all users
exports.quotes_all_get = async function (req, res) {
  const tag = req.query.tag;
  if (!tag) {
    res.send(await quotes.get_all_quotes());
  } else {
    res.send(await quotes.getQuotesHavingTag(tag));
  }
};

const findTags = (text) => {
  const matches = [...text.matchAll(/.*?(\s*#\w+)|.+/gi)];
  return matches
    .map((arr) => arr[1])
    .filter((possibleTag) => !!possibleTag)
    .map((tag) => tag.trim())
    .map((tag) => tag.slice(1));
};

//POST new quote
exports.create_quote_post = async function (req, res) {
  const { content } = req.body;
  // Find all the tags in content
  const tags = findTags(content);
  const quoteItem = req.body;
  quoteItem["tags"] = tags;
  const result = await quotes.add_quote(quoteItem);
  res.send(result, 201);
};

exports.voteForQuote = async function (req, res) {
  const quoteId = req.params.quoteId;
  const { userId, vote } = req.body;
  const result = await quoteVotes.add_quote_vote({ quoteId, userId, vote });
  res.send(result);
};

exports.user_quotes_get = async function (req, res) {
  console.log("userId: ", req.params.userId);
  const userId = req.params.userId;
  const result = await quotes.get_user_quotes(userId);
  res.send(result);
};

exports.update_quote = async function (req, res) {
  console.log("params", req.params);
  console.log("body", req.body);
  const quoteId = req.params.quoteId;
  const { content, userId } = req.body;
  // Find all the tags in content
  const tags = findTags(content);
  const result = await quotes.updateQuote({ userId, quoteId, content, tags });
  res.send(result);
};

exports.delete_quote = async function (req, res) {
  const quoteId = req.params.quoteId;
  const result = await quotes.deleteQuote({ quoteId });
  res.send(result);
};
