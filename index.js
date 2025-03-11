const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Dummy data for adventures and handicrafts
const adventures = [
  {
    id: 1,
    name: "Skiing in the Alps",
    description: "Enjoy the best slopes in the Alps.",
    image: "https://example.com/skiing.jpg",
    price: "$200",
  },
  {
    id: 2,
    name: "White Water Rafting",
    description: "Experience the thrill of white water rafting.",
    image: "https://example.com/rafting.jpg",
    price: "$150",
  },
  {
    id: 3,
    name: "Mountain Trekking",
    description: "Explore breathtaking mountain trails.",
    image: "https://example.com/trekking.jpg",
    price: "$100",
  },
];

const handicrafts = [
  {
    id: 1,
    name: "Handwoven Scarf",
    description: "Authentic handwoven scarf from local artisans.",
    image: "https://example.com/scarf.jpg",
    price: "$25",
  },
  {
    id: 2,
    name: "Wood Carved Artifact",
    description: "Unique wood carved artifact, perfect for home decor.",
    image: "https://example.com/artifact.jpg",
    price: "$40",
  },
  {
    id: 3,
    name: "Traditional Jewelry",
    description: "Exquisite traditional jewelry with intricate designs.",
    image: "https://example.com/jewelry.jpg",
    price: "$60",
  },
];

// API endpoints
app.get("/api/adventures", (req, res) => {
  res.json(adventures);
});

app.get("/api/handicrafts", (req, res) => {
  res.json(handicrafts);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});