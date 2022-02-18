const mongoose = require("mongoose");
const { Schema } = mongoose;
const { quoteSchema } = require("../db/quote.schema");

const QuoteModel = mongoose.model("quotes", quoteSchema);

async function add_quote(quote) {
  //   const document = new NewUser(user);
  //   return await document.save();
}

async function get_all_quotes() {
  //   return await NewUser.find().exec();
}
module.exports = {
  QuoteModel,
  add_quote,
  get_all_quotes,
};
