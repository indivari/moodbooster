const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/quoteController");

router.post("/add", quoteController.create_quote_post);

router.get("/list", quoteController.quotes_all_get);

module.exports = router;
