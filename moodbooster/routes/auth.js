var express = require("express");
var passport = require("passport");

var router = express.Router();

router.get("/login", function (req, res, next) {
  res.send("login");
});

// We redirect to facebook for authentication
router.get("/facebook", passport.authenticate("facebook"));

// We catch the authentication feedback, and decode token, save.
// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// );

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/auth/failed",
  })
);

router.get("/profile", (req, res) => {
  res.status(200).json({ result: "success", user: req.user });
});

router.get("/failed", (req, res) => {
  res.send("user is invalid");
});
module.exports = router;
