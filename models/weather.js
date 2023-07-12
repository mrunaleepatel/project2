const mongoose = require('./connection');

// schema into model
const weatherSchema = new mongoose.Schema({
  location: String,
    activity: String,
    temperature: Number,
    windSpeed: Number,
    precipitation: String,
    toGo: Boolean,
    username: String
  });

// weather model
const Weather = mongoose.model('weather', weatherSchema);

module.exports = Weather; 