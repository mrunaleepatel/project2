const mongoose = require('./connection');

// schema into model
const weatherSchema = new mongoose.Schema({
    location: String,
    activity: String,
    temperature: Number,
    windSpeed: Number,
    precipitation: String,
  });

// weather model
const Weather = mongoose.model('location', weatherSchema);

module.exports = Weather; 