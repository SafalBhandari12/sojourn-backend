const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Initialize Firebase Admin if it hasn't been initialized already.
if (!admin.apps.length) {
  // Parse the JSON stored in the environment variable
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// GET endpoint to fetch adventure data from Firestore
router.get("/", async (req, res) => {
  try {
    // Fetch all category documents
    const categoriesSnapshot = await db.collection("category").get();
    let categoriesData = [];

    // Loop through each category document
    for (const categoryDoc of categoriesSnapshot.docs) {
      const categoryData = categoryDoc.data();
      // Fetch the listings subcollection for this category
      const listingsSnapshot = await categoryDoc.ref
        .collection("listings")
        .get();
      const listings = listingsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      categoriesData.push({
        category: categoryData.categoryName, // assuming you saved the name under this field
        listings: listings,
      });
    }

    res.json(categoriesData);
  } catch (error) {
    console.error("Error retrieving data from Firestore:", error);
    res.status(500).json({ error: "Error retrieving data" });
  }
});

// POST endpoint to process a booking (dummy implementation)
router.post("/book", (req, res) => {
  const booking = req.body;
  // In a real app, you would process the booking and payment here.
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
