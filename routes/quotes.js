const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/quoteController");

router.post("/add", quoteController.create_quote_post);

router.get("/list", quoteController.quotes_all_get);

router.put("/:quoteId", quoteController.update_quote);

router.delete("/:quoteId", quoteController.delete_quote);

// POST localhost:8080/quotes/1324348324/vote
router.post("/:quoteId/vote", quoteController.voteForQuote);

module.exports = router;
