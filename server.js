// Import dependencies

require('dotenv').config();
const express = require('express');
const app = express();
const WeatherRouter = require('./controllers/weather.js');
const UserRouter = require('./controllers/user.js');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false
}));

app.use("/weather", WeatherRouter);
app.use("/user", UserRouter);


app.get('/', (req, res) => {
    res.render('index.ejs');
});


const PORT = process.env.PORT;
// listen
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})