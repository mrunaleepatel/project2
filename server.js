// Import dependencies

require('dotenv').config();
const express = require('express');
const LocationRouter = require('./controllers/location.js');
const UserRouter = require('./controllers/user.js');
const methodOverride = require('method-override');
const app = express();
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

app.use("/location", LocationRouter);
app.use("/user", UserRouter);


app.get('/', (req, res) => {
    res.render('index.ejs');
    })


const PORT = process.env.PORT;
// listen
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})