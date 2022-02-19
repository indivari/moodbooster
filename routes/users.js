const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/add", userController.create_user_post);

router.get("/list", userController.users_all_get);

router.get("/details", userController.one_user_get);

module.exports = router;
