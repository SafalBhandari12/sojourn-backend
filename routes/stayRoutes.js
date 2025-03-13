const express = require("express");
const router = express.Router();

const stayText =
  "Explore a variety of stays, including hotels, resorts, and homestays.";

router.get("/", (req, res) => {
  res.json(stayText);
});

module.exports = router;
