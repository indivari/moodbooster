const mongoose = require("mongoose");
const { Schema } = mongoose;
const { quoteSchema } = require("../db/quote.schema");

const Quote = mongoose.model("quotes", quoteSchema);

async function add_quote({ content, userId }) {
  const record = {
    content,
    userId,
    publishedDate: new Date(),
    noOfUpVotes: 0,
    noOfDownVotes: 0,
  };
  const document = new Quote(record);
  return await document.save();
}

async function get_all_quotes() {
  return await Quote.find().exec();
}
module.exports = {
  Quote,
  add_quote,
  get_all_quotes,
};
