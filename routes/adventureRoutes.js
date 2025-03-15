const adventureData = require("./adventureData.js");

const express = require("express");
const router = express.Router();



// GET endpoint to list adventures
router.get("/", (req, res) => {
  res.json(adventureData);
});

// POST endpoint to process a booking (dummy implementation)
router.post("/book", (req, res) => {
  const booking = req.body;
  // In a real app, you would process the booking and payment here.
  // For now, send back a dummy confirmation with a QR code image URL.
  const confirmation = {
    message: "Booking confirmed!",
    bookingId: Math.floor(Math.random() * 1000000),
    qrCode:
      "https://www.uniqode.com/blog/wp-content/themes/beaconstac/img/header/qr-template-4.webp", // dummy QR code URL
    bookingDetails: booking,
  };
  res.json(confirmation);
});

module.exports = router;
