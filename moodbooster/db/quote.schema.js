const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
  content: String,
  userId: String,
  publishedDate: Date,
  noOfUpVotes: Number,
  noOfDownVotes: Number,
});

const Quote = mongoose.model("quotes", quoteSchema);

module.exports = {
  quoteSchema,
  Quote,
};
