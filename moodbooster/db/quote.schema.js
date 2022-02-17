const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const Quote = mongoose.model("quotes", quoteSchema);

module.exports = {
  quoteSchema,
  Quote,
};
