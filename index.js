const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import and use different route files
app.use("/dummy/transport", require("./routes/transportRoutes"));
app.use("/dummy/stay", require("./routes/stayRoutes"));
app.use("/dummy/adventure", require("./routes/adventureRoutes"));
app.use("/dummy/localmarket", require("./routes/localMarketRoutes"));
app.use("/dummy/profile", require("./routes/profileRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
