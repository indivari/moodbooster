const mongoose = require("mongoose");
const { quoteSchema } = require("../db/quote.schema");

const Quote = mongoose.model("quotes", quoteSchema);

async function getAllTags() {
  return await Quote.distinct("tags");
}

module.exports = {
  getAllTags,
};
