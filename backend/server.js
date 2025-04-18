require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const venueRoutes = require('./routes/venueRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/venues', venueRoutes);

// Koneksi MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));