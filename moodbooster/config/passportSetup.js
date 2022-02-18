const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

module.exports = () => {
  passport.use(
    new FacebookStrategy(
      {
        // options for the strategy
        clientID: "494792422042918",
        clientSecret: "4dfec99a248e251d879a3d23da38326c",
        callbackURL: "http://localhost:8080/auth/facebook/callback",
        profileFields: [
          "id",
          "displayName",
          "name",
          "gender",
          "picture.type(large)",
          "email",
        ],
      }, // passport callback function
      (token, refreshToken, profile, done) => {
        console.log(profile);
        return done(null, profile);
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (id, done) {
    return done(null, id);
  });
};
