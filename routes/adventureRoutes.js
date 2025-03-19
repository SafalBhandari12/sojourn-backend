const express = require("express");
const router = express.Router();
const adventureData = require("./adventureData"); // Import your static adventure data

// GET endpoint to fetch adventure data from the static file
router.get("/", (req, res) => {
  try {
    res.json(adventureData);
  } catch (error) {
    console.error("Error retrieving adventure data:", error);
    res.status(500).json({ error: "Error retrieving adventure data" });
  }
});

// POST endpoint to process a booking using the static adventure data
router.post("/book", (req, res) => {
  const { adventureId, date, slots, paymentMethod } = req.body;
  try {
    // Find the adventure by its id in the static data
    const adventure = adventureData.find(
      (item) => item.id.toString() === adventureId.toString()
    );
    if (!adventure) {
      return res.status(404).json({ error: "Adventure not found" });
    }

    // Calculate the total price using the adventure's base price.
    // Assumes the adventure.price is a string that might contain non-digit characters.
    const basePrice = parseInt(adventure.price.replace(/[^\d]/g, ""), 10);
    const totalPrice = basePrice * parseInt(slots, 10);

    const confirmation = {
      message: "Booking confirmed!",
      bookingId: Math.floor(Math.random() * 1000000),
      totalPrice, // Securely calculated price
      qrCode:
        "https://www.uniqode.com/blog/wp-content/themes/beaconstac/img/header/qr-template-4.webp",
      bookingDetails: { adventureId, date, slots, paymentMethod },
    };

    res.json(confirmation);
  } catch (error) {
    console.error("Error processing booking: ", error);
    res.status(500).json({ error: "Error processing booking" });
  }
});

module.exports = router;