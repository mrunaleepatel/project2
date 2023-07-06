// Import dependencies

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();

// middleware

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// routes

app.get('/', (req, res) => {
    res.send('Hello World!');
    })

// listen
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})