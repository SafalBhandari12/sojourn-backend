const express = require("express");
const router = express.Router();

const adventureData = [
  {
    id: 1,
    name: "Paragliding",
    price: "₹2500",
    description: "Experience thrilling paragliding in Gulmarg.",
  },
  {
    id: 2,
    name: "River Rafting",
    price: "₹1500",
    description: "Enjoy white water rafting in Pahalgam.",
  },
  {
    id: 3,
    name: "Skiing",
    price: "₹5000",
    description: "Hit the slopes in Gulmarg with professional trainers.",
  },
];

router.get("/", (req, res) => {
  res.json(adventureData);
});

module.exports = router;
