const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/events");
const programRoutes = require("./routes/programs");
const contactRoutes = require("./routes/contact");
const newsletterRoute =require('./routes/newsletter');
require("dotenv").config();

const mongoUri = process.env.MONGO_URL;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/events", eventRoutes);
app.use("/programs", programRoutes);
app.use("/contact",contactRoutes);
app.use("/subscribe",newsletterRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
