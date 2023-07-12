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

// GET - List all locations 
router.get('/', async (req, res) => {
  const allWeathers = await Weather.find({ username: req.session.username });
  console.log(allWeathers)
  res.render(
    'weather/index.ejs', 
    { weathers: allWeathers, user: req.session.username }
  );
  
});

// GET - Show new location form
router.get('/new', (req, res) => {
  res.render('weather/new.ejs', { user: req.session.username });  
});

// POST - Create a new location 
router.post('/', async (req, res) => {
    
      if(req.body.toGo === 'on'){
          req.body.toGo = true;
      } else {
          req.body.toGo = false;
      }
      req.body.username = req.session.username;
      const newWeather = req.body;
      console.log(newWeather)
      await Weather.create(newWeather);
      res.redirect('/weather');
  })

// GET - Show one location
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const weather = await Weather.findById(id);
  res.render('weather/show.ejs', { weather });
});

// GET - Show edit form for one location
router.get('/:id/edit', async (req, res) => {
  const id = req.params.id;
  const weather = await Weather.findById(id);
  res.render('weather/edit.ejs', { weather });  
});

// PUT - Update a location 
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  req.body.toGo = req.body.toGo === 'on' ? true : false;
  await Weather.findByIdAndUpdate(id, req.body);
  res.redirect('/weather');  
});

// DELETE - Delete a location
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Weather.findByIdAndDelete(id);
  res.redirect('/weather')  
});

module.exports = router;




