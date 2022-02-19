const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const { getUser, saveUser } = require("../model/users");

module.exports = () => {
  const GITHUB_CLIENT_ID = "eb022fbb3775dc155024";
  const GITHUB_SECRET = "8415d3d274c1300cb3a951fcffa3ad14c029e4cb";

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
        process.nextTick(async function () {
          console.log(profile);
          const userId = profile.id;
          const user = await getUser(userId);
          if (user !== null) return done(null, user);

          const name = profile.displayName;
          const profilePhoto = profile.photos[0].value;
          const temp = { userId, name, profilePhoto, token };

          const newUser = await saveUser(temp);

          return done(null, newUser);
        });
      }
    )
  );

  passport.use(
    new GithubStrategy(
      {
        // options for the strategy
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_SECRET,
        callbackURL: "http://localhost:8080/auth/github/callback",
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
        process.nextTick(async function () {
          const userId = profile.id;
          const user = await getUser(userId);
          if (user !== null) return done(null, user);

          const name = profile.username;
          const email = profile._json.email;
          const profilePhoto = profile.photos[0].value;
          const temp = { userId, name, email, profilePhoto, token };

          const newUser = await saveUser(temp);

          return done(null, newUser);
        });
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
