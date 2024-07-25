const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const eventRoutes = require('./routes/events');
const programRoutes = require('./routes/programs');
const dotenv = require('dotenv').config()

const mongoUri = process.env.MONGO_URL
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

// Routes
app.use('/events', eventRoutes);
app.use('/programs', programRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
