const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteVoteSchema = new Schema({
  userId: String,
  quoteId: mongoose.Schema.Types.ObjectId,
  // 1 for a like, 0 for a dislike.
  vote: mongoose.Schema.Types.Boolean,
});

const QuoteVote = mongoose.model("quoteVotes", quoteVoteSchema);

module.exports = {
  quoteVoteSchema,
  QuoteVote,
};
