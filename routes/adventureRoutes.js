const express = require("express");
const router = express.Router();

const adventureData = [
  {
    id: 1,
    name: "Gonddaa Rides",
    price: "₹2000",
    description: "Enjoy a scenic gonddaa ride with breathtaking views.",
    location: "Various Locations",
    duration: "1 hour",
    availableSlots: 20,
    rating: 4.7,
    inclusions: ["Guide", "Safety Gear"], // new field for inclusions
    reviews: [
      { user: "Alice", comment: "Loved the view!", rating: 5 },
      { user: "Bob", comment: "Smooth and enjoyable.", rating: 4 },
    ],
    imageUrl:
      "https://kashmirtourtravel.com/blog/wp-content/uploads/2023/07/gondola-cable-car-ride-in-gulmarg.jpg",
    bookingDetails: {
      ageRequirement: "All ages",
      difficulty: "Easy",
      equipmentProvided: false,
      cancellationPolicy: "12 hours notice required",
    },
  },
  {
    id: 2,
    name: "Trekking",
    price: "₹3000",
    description: "Explore the mountains with guided trekking expeditions.",
    location: "Various Trails",
    duration: "5 hours",
    availableSlots: 15,
    rating: 4.8,
    inclusions: ["Guide", "Meal", "Safety Gear"],
    reviews: [
      { user: "Charlie", comment: "Incredible adventure!", rating: 5 },
      { user: "Dana", comment: "Challenging but rewarding.", rating: 4.5 },
    ],
    imageUrl:
      "https://static.toiimg.com/thumb/110879936/Trekking-tips.jpg?width=1200&height=900",
    bookingDetails: {
      ageRequirement: "10+ years",
      difficulty: "Medium",
      equipmentProvided: true,
      cancellationPolicy: "24 hours notice required",
    },
  },
  {
    id: 3,
    name: "River Rafting",
    price: "₹1500",
    description: "Experience the thrill of white-water rafting.",
    location: "Pahalgam, Jammu & Kashmir",
    duration: "3 hours",
    availableSlots: 15,
    rating: 4.5,
    inclusions: ["Guide", "Safety Gear", "Equipment"],
    reviews: [
      { user: "Eve", comment: "Exciting and fun!", rating: 5 },
      { user: "Frank", comment: "Very well organized.", rating: 4 },
    ],
    imageUrl:
      "https://cdn-bbgio.nitrocdn.com/gczrOkaimEMxJOFiDrkhHCxqRwOBQveV/assets/images/optimized/rev-feeb3f7/wp-content/uploads/2024/09/White-Water-Rafting-Karnataka-1080x675.jpg",
    bookingDetails: {
      ageRequirement: "14+ years",
      difficulty: "High",
      equipmentProvided: true,
      cancellationPolicy: "48 hours notice required",
    },
  },
  {
    id: 4,
    name: "Camping",
    price: "₹2500",
    description:
      "Enjoy a night under the stars with a guided camping experience.",
    location: "Multiple Locations",
    duration: "Overnight",
    availableSlots: 10,
    rating: 4.6,
    inclusions: ["Guide", "Meal", "Campfire", "Safety Gear"],
    reviews: [
      { user: "George", comment: "Peaceful and relaxing!", rating: 5 },
      { user: "Hannah", comment: "A must-try experience.", rating: 4.5 },
    ],
    imageUrl:
      "https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/16:9/w_2560%2Cc_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg",
    bookingDetails: {
      ageRequirement: "12+ years",
      difficulty: "Medium",
      equipmentProvided: true,
      cancellationPolicy: "24 hours notice required",
    },
  },
];

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
    qrCode: "https://example.com/dummy-qrcode.png", // dummy QR code URL
    bookingDetails: booking,
  };
  res.json(confirmation);
});

module.exports = router;
