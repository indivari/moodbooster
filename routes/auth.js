var express = require("express");
var passport = require("passport");

var router = express.Router();

router.get("/login", function (req, res, next) {
  res.send("login");
});

// We redirect to facebook for authentication
router.get("/facebook", passport.authenticate("facebook"));

// We catch the authentication feedback, and decode token, save.

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/failed",
  })
);

router.get("/profile", (req, res) => {
  res.status(200).json({ result: "success", user: req.user });
});

router.get("/failed", (req, res) => {
  res.send("user is invalid");
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("http://localhost:3000");
});

router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/failed",
  })
);

module.exports = router;
