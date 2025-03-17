const express = require("express");
const router = express.Router();

// Sample data for local market products with detailed descriptions
const localMarketData = [
  {
    id: 101,
    name: "Kashmiri Saffron",
    price: "₹1,500",
    description:
      "Premium grade saffron directly from the farms of Pampore. Known for its unique aroma and color.",
    detailedDescription:
      "Our premium Kashmiri saffron is hand-harvested at dawn by experienced farmers during a brief annual flowering season. Each flower produces only three stigmas, requiring over 170,000 flowers to produce just one kilogram of this precious spice. Kashmiri saffron is distinguished by its deep crimson color, potent aroma, and intense flavor profile with subtle honey notes. It's naturally dried without chemicals and sorted by hand to ensure only the highest quality reaches you.",
    origin: "Meticulously grown and harvested from the saffron fields of Pampore, known as the 'Saffron Town' of Kashmir where the unique soil composition and climate create optimal growing conditions.",
    usageInstructions: "For cooking, soak a few strands in warm water or milk for 15-20 minutes before adding to your dish. For tea or kahwa, add directly to the brewing liquid. Store in an airtight container away from direct sunlight to preserve its potency and aroma.",
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
    detailedDescription:
      "This exquisite Pashmina shawl represents centuries of Kashmiri craftsmanship. Made from the ultra-fine undercoat of the Changthangi goat (Capra hircus), which naturally sheds its winter coat each spring. The wool, collected by combing rather than shearing, is painstakingly cleaned, spun, and woven by skilled artisans using traditional techniques passed down through generations. Each shawl takes 3-4 months to complete and features intricate hand-embroidery in the classic Kashmiri Sozni style with over 30 colors of silk thread.",
    origin: "The wool comes from high-altitude regions of Ladakh where the Changthangi goats develop their exceptionally fine wool as protection against harsh winters. The weaving and embroidery work is done by master craftspeople in Srinagar.",
    careInstructions: "Dry clean only. Store folded with acid-free tissue paper. Avoid direct sunlight and moisture. To maintain its softness, air out occasionally but avoid frequent washing.",
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
    detailedDescription:
      "Our premium Kashmiri walnuts are harvested from ancient walnut trees growing in the pristine Himalayan foothills. These walnuts are larger, creamier, and less bitter than varieties found elsewhere, with thin shells that make them easy to crack. They're harvested at peak ripeness, naturally dried in the mountain air, and carefully sorted to ensure consistent quality. Packed with omega-3 fatty acids, antioxidants, and essential nutrients, these walnuts have been a staple of Kashmiri cuisine and traditional medicine for centuries.",
    origin: "Sourced from sustainable orchards in the Baramulla and Kupwara districts of Kashmir, where walnut trees that are often over 100 years old grow at elevations of 5,000-7,000 feet in mineral-rich soil.",
    nutritionalInfo: "Rich in protein, fiber, and healthy fats. Contains significant amounts of manganese, copper, phosphorus, vitamin B6, and folate. Approximately 654 calories per 100g serving.",
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
    detailedDescription:
      "Each Kashmiri papier-mâché box is a collector's item created through a meticulous process that takes up to 30 days to complete. The craft begins with waste paper pulped into a paste, molded into the desired shape, and dried. Master artisans then apply multiple layers of smooth limestone paste as a base before hand-painting intricate designs. Traditional motifs include the chinar leaf, almond blossoms, irises, and intricate Persian-influenced patterns. The box is finished with multiple coats of lacquer for durability and a characteristic glossy finish.",
    origin: "Created in the historic papier-mâché workshops of downtown Srinagar. This traditional craft was introduced to Kashmir in the 15th century and has been perfected over generations by specialized artisan families.",
    artistDetails: "Each piece is signed by the master artisan who painted it. Our boxes are created by award-winning craftspeople who have dedicated their lives to preserving this traditional art form.",
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
    detailedDescription:
      "Kahwa is the heart of Kashmiri hospitality, a traditional tea savored across the region for centuries. Our premium blend combines delicate green tea leaves with authentic Kashmiri saffron, cardamom pods, cinnamon bark, and crushed almonds. Small batches are blended by hand to ensure perfect proportions of each ingredient. This aromatic tea is traditionally served from a copper samovar during special occasions, family gatherings, and to welcome guests. Beyond its delightful taste, Kahwa is valued for its digestive benefits and warming properties during Kashmir's cold winters.",
    origin: "Our blend uses green tea from the Himalayan foothills, combined with Kashmiri saffron from Pampore and locally sourced spices that have been selected for their aroma and flavor profile.",
    brewingInstructions: "Heat water just below boiling (90°C). Add 1 teaspoon per cup. Steep for 3-5 minutes. Traditionally served with a pinch of saffron and crushed almonds added to the cup. Honey may be added for sweetness.",
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
    detailedDescription:
      "The Kashmiri copper samovar is both a functional brewing device and a work of art that has been central to Kashmiri tea culture for centuries. Each samovar features a distinctive design with a central chamber for burning charcoal to keep the surrounding tea hot for hours. Our samovars are handcrafted from high-quality copper using traditional techniques and tools. The exterior features intricate hand-engraved designs characteristic of Kashmiri metalwork, including paisley patterns, floral motifs, and geometric designs. The copper naturally develops a beautiful patina over time while also imparting trace minerals that enhance the flavor of Kahwa tea.",
    origin: "Handcrafted in the copper workshops of downtown Srinagar by artisans whose families have specialized in metalwork for generations, continuing a tradition believed to have been introduced to Kashmir from Central Asia in the 14th century.",
    careInstructions: "Clean with a solution of salt and lemon juice, then rinse thoroughly. Do not use abrasive cleaners. The natural patina that develops enhances its beauty and value.",
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
    detailedDescription:
      "Each Kashmiri silk carpet represents thousands of hours of meticulous handwork. The carpet-making process begins with raw silk being spun into fine threads, dyed using traditional techniques with natural colors extracted from walnut bark, saffron, indigo, and other plant sources. Master weavers then hand-knot the silk on a cotton foundation, with each square inch containing up to 1,600 individual knots. Our carpets feature classic Kashmiri designs including the tree of life, paisley patterns, and floral motifs inspired by the region's natural beauty. This particular piece took 8 months to complete and represents the highest quality of Kashmiri carpet craftsmanship.",
    origin: "Created in the carpet workshops of Srinagar by master weavers who have trained for decades to perfect their craft. Carpet making was introduced to Kashmir in the 15th century by the Persian King Zain-ul-Abidin and has evolved into a distinctive Kashmiri art form.",
    careInstructions: "Professional cleaning recommended. Rotate periodically to ensure even wear. Avoid direct sunlight to prevent color fading. If properly maintained, a quality Kashmiri carpet will last for generations and may increase in value over time.",
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
    detailedDescription:
      "Our premium dry fruits gift box showcases the finest offerings from Kashmir's orchards. The selection includes: creamy Kashmiri almonds known for their distinctive flavor and elongated shape; large, light-colored walnuts with a sweet, mild taste; golden dried apricots that maintain their natural sweetness without added sugar; dried figs with their distinctive honey-like flavor; tart dried cherries; and pistachios. All fruits are naturally sun-dried using traditional methods to preserve their nutritional value and flavor. The assortment comes in a handcrafted walnut wood box with traditional carved designs, making it both a delightful treat and an elegant gift.",
    origin: "All dry fruits are sourced from sustainable orchards across the Kashmir Valley, particularly from the districts of Baramulla, Shopian, and Anantnag, where the unique soil composition and climate create ideal growing conditions.",
    storageInstructions: "Store in a cool, dry place away from direct sunlight. Once opened, transfer to an airtight container to maintain freshness. Best consumed within 6 months of purchase for optimal flavor and texture.",
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
    detailedDescription:
      "Chinar leaf art is a unique Kashmiri craft that transforms the distinctive five-pointed leaves of the chinar tree (Platanus orientalis) into natural canvases for miniature paintings. The leaves are carefully selected in autumn when they reach their full size and vibrant red color, then preserved through a special drying process that maintains their flexibility and prevents deterioration. Our artisans then hand-paint each leaf with detailed scenes of Kashmiri life, landscapes, houseboats on Dal Lake, or traditional motifs using fine brushes and natural pigments mixed with walnut oil. Each piece is a unique work of art that captures the essence of Kashmir's natural beauty and cultural heritage.",
    origin: "Created by specialized artisans in Srinagar who collect leaves from the ancient chinar trees that line the city's parks and waterways. The chinar tree has been an iconic symbol of Kashmir since it was introduced to the region by Central Asian rulers centuries ago.",
    preservation: "Each leaf is treated with natural preservatives and sealed with a clear, non-toxic coating to ensure its longevity. Display away from direct sunlight and excessive moisture to maintain its vibrant colors for years.",
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
    detailedDescription:
      "The phiran is the iconic traditional garment of Kashmir, perfectly adapted to the region's cold climate. Our phirans are crafted from high-quality wool in traditional styles that have remained largely unchanged for centuries. The loose, flowing design allows for layering over warmer clothes during winter, while the classic embroidery known as 'tilla' work adorns the collar, front panel, and sleeves. This particular piece features hand-embroidered floral patterns using metallic thread that required over 80 hours of skilled needlework. The embroidery style combines Persian influences with distinctly Kashmiri motifs including the chinar leaf, almond blossoms, and intricate paisley patterns.",
    origin: "Handcrafted in the artisan workshops of Srinagar by skilled tailors and embroiderers who have inherited their techniques through generations of family tradition.",
    sizingAndCare: "Available in standard Kashmiri sizing which tends to be loose-fitting by design. Hand wash cold or dry clean only. Iron on low heat from the inside. Store folded rather than hung to maintain shape.",
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