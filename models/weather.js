const mongoose = require('./connection');

// schema into model
const outdoorActivityWeatherSchema = new mongoose.Schema({
    location: String,
    activity: String,
    temperature: Number,
    windSpeed: Number,
    precipitation: String,
  });

// weather model
const OutdoorActivityWeather = mongoose.model('weather', outdoorActivityWeatherSchema);

module.exports = OutdoorActivityWeather; 