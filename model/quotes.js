const mongoose = require("mongoose");
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

async function getQuotesHavingTag(tag) {
  // await Quote.find({ tags: { $all: [tag] } });

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
};
