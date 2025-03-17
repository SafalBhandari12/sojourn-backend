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
    image: "https://satvyk.com/wp-content/uploads/2019/02/Kesar-1.jpg",
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
      "https://pashtush.in/cdn/shop/products/pashtush-pashmina-pashtush-mens-kashmiri-tilla-hand-embroidered-shawl-full-size-extra-fine-wool-kalamkari-31340106154038.png?v=1663141744&width=1080",
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
      "https://www.kashmirorigin.com/cdn/shop/files/Kashmiri-Walnuts-3-jpg_7f9ce05d-1d9f-4f06-a5ac-bc5ce9fab3dd.webp?v=1726485251",
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
      "https://www.tregeaglefineart.com/upload/images/shopprod/10747/a-good-collection-of-twenty-two-22-kashmiri-papier-m-ch-boxes-etc_10747_main_size3.jpg",
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
      "https://www.dawnlee.in/wp-content/uploads/2024/03/indias-best-premium-quality-kashmiri-kahwa-product.webp",
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
      "https://cdn.shopify.com/s/files/1/0259/9737/7594/products/66866d1b-3f4d-4ba6-b01b-4294cf64f037_300x@2x.jpg?v=1622614843",
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
      "https://www.kashmirbox.com/cdn/shop/files/DSC01170-Edit.jpg?v=1739683572&width=1500",
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
      "https://www.indicinspirations.com/cdn/shop/products/kashmiri-dry-fruit-pack-boxes-439122.jpg?v=1632129006&width=899",
    category: "Food",
    rating: 4.8,
  },
  {
    id: 109,
    name: "Chinar Leaf Art",
    price: "₹600",
    description:
      "Dried chinar leaves with intricate paintings depicting Kashmiri landscapes and culture.",
    image: "https://i.ytimg.com/vi/x4BZOacH8dY/sddefault.jpg",
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
      "https://www.kashmirbox.com/cdn/shop/products/DSC00794.jpg?v=1740736060&width=1500",
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
