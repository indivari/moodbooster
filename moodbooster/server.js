const express = require("express");
const MongoDB = require("./db/mongodb");
const path = require("path");
const PORT = 8080;
const mongo = new MongoDB();

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
// const quotesRouter = require("./routes/quotes");

const app = express();

mongo.connect();

app.listen(PORT, () => {
  console.log(` server listening on port ${PORT}`);
});

// set up middleware

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/quotes", quotesRouter);

module.exports = {
  app,
  mongo,
};
