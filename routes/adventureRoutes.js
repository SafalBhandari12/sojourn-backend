const express = require("express");
const router = express.Router();

const adventureData = [
  {
    id: 1,
    name: "Paragliding",
    price: "₹2500",
    description: "Experience thrilling paragliding in Gulmarg.",
    location: "Gulmarg, Jammu & Kashmir",
    duration: "2 hours",
    availableSlots: 10,
    rating: 4.8,
    reviews: [
      { user: "Alice", comment: "Amazing experience!", rating: 5 },
      { user: "Bob", comment: "Quite thrilling!", rating: 4 },
    ],
    imageUrl: "https://example.com/images/paragliding.jpg",
    bookingDetails: {
      ageRequirement: "12+ years",
      difficulty: "Medium",
      equipmentProvided: true,
      cancellationPolicy: "24 hours notice required",
    },
  },
  {
    id: 2,
    name: "River Rafting",
    price: "₹1500",
    description: "Enjoy white water rafting in Pahalgam.",
    location: "Pahalgam, Jammu & Kashmir",
    duration: "3 hours",
    availableSlots: 15,
    rating: 4.5,
    reviews: [
      { user: "Charlie", comment: "Thrilling and fun!", rating: 5 },
      { user: "Dana", comment: "Well organized and safe.", rating: 4 },
    ],
    imageUrl: "https://example.com/images/rafting.jpg",
    bookingDetails: {
      ageRequirement: "14+ years",
      difficulty: "High",
      equipmentProvided: true,
      cancellationPolicy: "48 hours notice required",
    },
  },
  {
    id: 3,
    name: "Skiing",
    price: "₹5000",
    description: "Hit the slopes in Gulmarg with professional trainers.",
    location: "Gulmarg, Jammu & Kashmir",
    duration: "Full Day",
    availableSlots: 8,
    rating: 4.9,
    reviews: [
      { user: "Eve", comment: "Best skiing experience ever!", rating: 5 },
      {
        user: "Frank",
        comment: "A bit expensive but totally worth it.",
        rating: 4.5,
      },
    ],
    imageUrl: "https://example.com/images/skiing.jpg",
    bookingDetails: {
      ageRequirement: "16+ years",
      difficulty: "High",
      equipmentProvided: true,
      cancellationPolicy: "72 hours notice required",
    },
  },
];

router.get("/", (req, res) => {
  res.json(adventureData);
});

module.exports = router;
