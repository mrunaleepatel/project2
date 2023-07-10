const express = require('express');
const Weather = require('../models/weather');

const router = express.Router();

// middleware
// router.use((req, res, next) => {
//     if(req.session.logginIn) {
//         next();
//     } else {
//         res.redirect('/user/login')
//     }
// })

// controllers

router.get('/', async (req, res) => {
    const allWeather = await Weather.find({ username: req.session.username })
    res.render('weather/index.ejs', { weathers: allWeather, user: req.session.username });
});

// NEW
router.get('/new', (req, res) => {
    res.render('weather/new.ejs')
})

// DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id.id;
    await Weather.findByIdAndDelete(id)
    res.redirect('/weather')
})

// SHOW 
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const weather = await Weather.findById(id);
    res.render("weather/show.ejs", { weather })
})

// EDIT
router.get('/:id/edit', async (req, res) => {
    const weather = await Weather.findById(id);
    res.render('weather/edit.ejs', { weather })
})

// UPDATE
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.toGo = req.body.toGo === 'on' ? true : false;
    await Weather.findByIdAndUpdate(id, req.body);
    res.redirect('/weather')
})

// CREATE
router.post('/', async (req, res) => {
    
    if(req.body.toGo === 'on'){
        req.body.toGo = true;
    } else {
        req.body.toGo = false;
    }
    req.body.username = req.session.username;
    await Weather.create(req.body);
    res.redirect('/weather');
})

module.exports = router;