const express = require("express");
const router = express.Router();

const transportText =
  "Welcome to Transport Section. Book taxis, cabs, and public transport easily.";

router.get("/", (req, res) => {
  res.json(transportText);
});

module.exports = router;
