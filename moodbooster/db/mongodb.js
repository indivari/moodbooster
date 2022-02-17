const mongoose = require("mongoose"),
  Admin = mongoose.mongo.Admin;
const initUserSchema = require("./user.schema");

const userModel = require("../model/users");

//mongoDB Class
class MongoDB {
  constructor() {
    this.uri = `mongodb+srv://${process.env.MOODBOOSTER_UID}:${process.env.MOODBOOSTER_PWD}@moodbooster.whmjf.mongodb.net/moodBoosterDb?retryWrites=true&w=majority`;
  }

  //connect to MongoDB Atlas Instance
  async connect() {
    console.log(this.uri);
    //make async call with arrow fucntion format.
    await mongoose
      .connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((MongooseNode) => {
        const nativeConnection = MongooseNode.connections[0];
        // connection established - use the Admin object grabbed above in the require
        new Admin(nativeConnection.db).listDatabases((err, result) => {
          console.log("Successfully Connected to MongoDB - moodBoosterDb");
        });
      });
  }
}

module.exports = MongoDB;
