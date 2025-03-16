const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Initialize Firebase Admin if it hasn't been initialized already.
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// GET endpoint to fetch adventure data from Firestore
router.get("/", async (req, res) => {
  try {
    const categoriesSnapshot = await db.collection("category").get();
    let categoriesData = [];
    for (const categoryDoc of categoriesSnapshot.docs) {
      const categoryData = categoryDoc.data();
      const listingsSnapshot = await categoryDoc.ref
        .collection("listings")
        .get();
      const listings = listingsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      categoriesData.push({
        category: categoryData.categoryName,
        listings,
      });
    }
    res.json(categoriesData);
  } catch (error) {
    console.error("Error retrieving data from Firestore:", error);
    res.status(500).json({ error: "Error retrieving data" });
  }
});

// POST endpoint to process a booking (secure implementation)
router.post("/book", async (req, res) => {
  const { adventureId, date, slots, paymentMethod } = req.body;
  try {
    // Securely retrieve the adventure details from Firestore.
    // (Assuming adventures are stored within the category->listings structure)
    const categoriesSnapshot = await db.collection("category").get();
    let adventureData = null;
    for (const categoryDoc of categoriesSnapshot.docs) {
      const listingsSnapshot = await categoryDoc.ref
        .collection("listings")
        .get();
      for (const listingDoc of listingsSnapshot.docs) {
        if (listingDoc.id === adventureId.toString()) {
          adventureData = listingDoc.data();
          break;
        }
      }
      if (adventureData) break;
    }
    if (!adventureData) {
      return res.status(404).json({ error: "Adventure not found" });
    }

    // Securely calculate the total price from backend data.
    // Remove any currency symbols and calculate total based on the number of slots.
    const basePrice = parseInt(adventureData.price.replace(/[^\d]/g, ""));
    const totalPrice = basePrice * parseInt(slots);

    // If paymentMethod is online, you would typically create an order via Razorpay's backend API.
    // For demonstration purposes, we assume the payment will be processed on the client side.

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