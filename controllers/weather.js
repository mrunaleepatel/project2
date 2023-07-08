const express = require('express');
const OutdoorActivityWeather = require('../models/weather');

const router = express.Router();

// middleware
router.use((req, res, next) => {
    if(req.session.logginIn) {
        next();
    } else {
        res.redirect('/user/login')
    }
})

// controllers
router.get('/', async (req, res) => {
    const allOutdoorActivityWeather = await OutdoorActivityWeather.find({ username: req.session.username })
    res.render('weather/index.ejs', { weather: allOutdoorActivityWeather, user: req.session.username }
    )
})

module.exports = router;