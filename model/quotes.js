const mongoose = require("mongoose");
const { quoteSchema } = require("../db/quote.schema");

const Quote = mongoose.model("quotes", quoteSchema);

async function add_quote({ content, userId, tags }) {
  const record = {
    content,
    userId,
    publishedDate: new Date(),
    tags,
  };
  const document = new Quote(record);
  return await document.save();
}

async function get_user_quotes(userId) {
  console.log("userquotes, userid", userId);
  const result = await Quote.aggregate([
    {
      $match: {
        userId: userId,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "userId",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $lookup: {
        from: "quotevotes",
        localField: "_id",
        foreignField: "quoteId",
        as: "votes",
      },
    },
    {
      $project: {
        _id: 1,
        content: 1,
        user: 1,
        votes: 1,
        numberOfVotes: {
          $cond: {
            if: { $isArray: "$votes" },
            then: { $size: "$votes" },
            else: "0",
          },
        },
      },
    },
    { $sort: { numberOfVotes: -1 } },
  ]);
  return result;
}

async function get_all_quotes() {
  const result = await Quote.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "userId",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $lookup: {
        from: "quotevotes",
        localField: "_id",
        foreignField: "quoteId",
        as: "votes",
      },
    },
    {
      $project: {
        _id: 1,
        content: 1,
        user: 1,
        votes: 1,
        numberOfVotes: {
          $cond: {
            if: { $isArray: "$votes" },
            then: { $size: "$votes" },
            else: "0",
          },
        },
      },
    },
    { $sort: { numberOfVotes: -1 } },
  ]);

  // TODO: change quoteId to ObjectId type
  return result;
}

async function getAllTags() {
  return await Quote.distinct("tags");
}

async function deleteQuote({ quoteId }) {
  return await Quote.deleteOne({ _id: quoteId });
}

async function updateQuote({ userId, quoteId, content, tags }) {
  return await Quote.updateOne(
    {
      _id: quoteId,
    },
    { $set: { content, userId, publishedDate: new Date(), tags } }
  );
}

async function getQuotesHavingTag(tag) {
  const result = await Quote.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "userId",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $lookup: {
        from: "quotevotes",
        localField: "_id",
        foreignField: "quoteId",
        as: "votes",
      },
    },
    {
      $match: {
        tags: {
          $eq: tag,
        },
      },
    },
    {
      $project: {
        _id: 1,
        content: 1,
        user: 1,
        votes: 1,
        tags: 1,
        numberOfVotes: {
          $cond: {
            if: { $isArray: "$votes" },
            then: { $size: "$votes" },
            else: "0",
          },
        },
      },
    },
    { $sort: { numberOfVotes: -1 } },
  ]);

  //.find({ tags: { $all: [tag] } });

  return result;
}

module.exports = {
  Quote,
  add_quote,
  get_all_quotes,
  getAllTags,
  getQuotesHavingTag,
  get_user_quotes,
  deleteQuote,
  updateQuote,
};
