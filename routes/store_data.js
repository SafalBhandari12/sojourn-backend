// uploadData.js
const admin = require("firebase-admin");
const adventureData = require("./adventureData");

// Initialize the Firebase Admin app with your service account key.
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Loop through each category and store it in the 'category' collection.
adventureData.forEach(async (cat) => {
  try {
    // Use the category name as the document ID (or generate a custom ID)
    const categoryDocRef = db.collection("category").doc(cat.category);

    // You might want to store any category-level data here.
    await categoryDocRef.set({ categoryName: cat.category });

    // For each listing, add it as a document in the 'listings' subcollection.
    cat.listings.forEach(async (listing) => {
      await categoryDocRef.collection("listings").add(listing);
      console.log(
        `Listing "${listing.name}" added to category "${cat.category}"`
      );
    });
  } catch (error) {
    console.error(
      `Error uploading data for category "${cat.category}":`,
      error
    );
  }
});
