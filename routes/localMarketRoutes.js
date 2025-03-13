const express = require("express");
const router = express.Router();

const localMarketData = [
  {
    id: 101,
    name: "Kashmiri Saffron",
    price: "₹500",
    description: "Pure saffron directly from the farms of Pampore.",
  },
  {
    id: 102,
    name: "Pashmina Shawl",
    price: "₹2500",
    description: "Handwoven luxury shawls made from authentic Pashmina wool.",
  },
  {
    id: 103,
    name: "Walnuts",
    price: "₹700",
    description: "Organic Kashmiri walnuts, rich in nutrients and flavor.",
  },
];

router.get("/", (req, res) => {
  res.json(localMarketData);
});

module.exports = router;
