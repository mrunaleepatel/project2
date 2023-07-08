const express = require('express');
const Location = require('../models/location');

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
    const allLocation = await Location.find({ username: req.session.username })
    res.render('location/index.ejs', { location: allLocation, user: req.session.username }
    )
})

module.exports = router;