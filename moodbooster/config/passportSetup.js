const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy({
    // options for the strategy
  }),
  () => {
    // passport callback function
  }
);
