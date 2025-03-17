const express = require("express");
const router = express.Router();

// Sample data for local market products
const localMarketData = [
  {
    id: 101,
    name: "Kashmiri Saffron",
    price: "₹1,500",
    description:
      "Premium grade saffron directly from the farms of Pampore. Known for its unique aroma and color.",
    image:
      "https://images.unsplash.com/photo-1631118052174-8a16c5674996?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Spices",
    rating: 4.9,
    featured: true,
  },
  {
    id: 102,
    name: "Pashmina Shawl",
    price: "₹8,500",
    description:
      "Handwoven luxury shawls made from authentic Pashmina wool. Warm, soft, and incredibly light.",
    image:
      "https://images.unsplash.com/photo-1606913739895-becd574c3d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    rating: 4.8,
    featured: true,
  },
  {
    id: 103,
    name: "Kashmiri Walnuts",
    price: "₹900",
    description:
      "Organic walnuts from the valley, rich in nutrients and flavor. Perfect for snacking and cooking.",
    image:
      "https://images.unsplash.com/photo-1600189020840-e9a582c5419b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    rating: 4.7,
  },
  {
    id: 104,
    name: "Papier-mâché Box",
    price: "₹1,200",
    description:
      "Handcrafted decorative boxes with intricate traditional designs. Perfect for home decor or gifts.",
    image:
      "https://images.unsplash.com/photo-1620783770927-79bed29fc308?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handicrafts",
    rating: 4.6,
  },
  {
    id: 105,
    name: "Kahwa Tea",
    price: "₹450",
    description:
      "Traditional Kashmiri green tea blend with saffron, cardamom, cinnamon and almonds.",
    image:
      "https://images.unsplash.com/photo-1578874854637-9f246f48f6f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    rating: 4.9,
    featured: true,
  },
  {
    id: 106,
    name: "Copper Samovar",
    price: "₹3,800",
    description:
      "Traditional copper kettle used for brewing and serving Kahwa tea. Ornate and functional.",
    image:
      "https://images.unsplash.com/photo-1626080308832-37f55b4h4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handicrafts",
    rating: 4.7,
  },
  {
    id: 107,
    name: "Kashmiri Carpet",
    price: "₹15,000",
    description:
      "Hand-knotted silk carpet with intricate traditional patterns. A masterpiece of craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1600244900033-3b84b1599635?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    rating: 4.9,
    featured: true,
  },
  {
    id: 108,
    name: "Dry Fruits Box",
    price: "₹1,800",
    description:
      "Assorted premium dry fruits including almonds, walnuts, dried apricots, and figs from Kashmir.",
    image:
      "https://images.unsplash.com/photo-1606914501295-40h4e6k5f5t?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    rating: 4.8,
  },
  {
    id: 109,
    name: "Chinar Leaf Art",
    price: "₹600",
    description:
      "Dried chinar leaves with intricate paintings depicting Kashmiri landscapes and culture.",
    image:
      "https://images.unsplash.com/photo-1614884836087-567lq4l0h4y?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Handicrafts",
    rating: 4.5,
  },
  {
    id: 110,
    name: "Kashmiri Phiran",
    price: "₹2,500",
    description:
      "Traditional Kashmiri woolen garment with beautiful embroidery. Warm and stylish.",
    image:
      "https://images.unsplash.com/photo-1621845378233-75d18f8de3c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    rating: 4.7,
  },
];

// Get all products
router.get("/", (req, res) => {
  res.json(localMarketData);
});

// Get product by ID
router.get("/:id", (req, res) => {
  const product = localMarketData.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Get products by category
router.get("/category/:category", (req, res) => {
  const categoryProducts = localMarketData.filter(
    (item) => item.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(categoryProducts);
});

// Get featured products
router.get("/featured", (req, res) => {
  const featuredProducts = localMarketData.filter((item) => item.featured);
  res.json(featuredProducts);
});

module.exports = router;
