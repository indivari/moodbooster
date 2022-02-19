const { QuoteVote } = require("../db/quoteVote.schema");

async function add_quote_vote({ userId, quoteId, vote }) {
  const record = {
    userId,
    quoteId,
    vote,
  };
  const document = new QuoteVote(record);
  return await document.save();
}

module.exports = {
  add_quote_vote,
};
