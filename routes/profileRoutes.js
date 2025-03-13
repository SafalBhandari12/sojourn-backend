const express = require("express");
const router = express.Router();

const profileText =
  "Welcome to your proile! Update personal details, manage bookings, and view travel history.";

router.get("/", (req, res) => {
  res.json(profileText);
});

module.exports = router;
