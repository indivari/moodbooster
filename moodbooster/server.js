const express = require("express");
var cors = require("cors");
const MongoDB = require("./db/mongodb");
const path = require("path");
const PORT = 8080;
const mongo = new MongoDB();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const quotesRouter = require("./routes/quotes");
const authRouter = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

require("./config/passportSetup")();

const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

mongo.connect();

// set up middleware

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.use(cookieParser());
app.use(
  session({ secret: "moodbooster", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/quotes", quotesRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(` server listening on port ${PORT}`);
});

module.exports = {
  app,
  mongo,
};
