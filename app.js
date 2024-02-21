// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;


app.use(express.static('../public'));
app.get('/stylesheets/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/stylesheets/style.css');
});

app.get('/images/cinema.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/images/cinema.jpg');
});







// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

app.get('/movies.hbs', (req, res) => {
    // Your route handling logic here
    res.render('movies', { movies: [] });
});

const Movie = require('./models/Movie.model');
app.get('/', async (req, res) => {
    try {
        // Fetch movies data from the database
        const movies = await Movie.find();

        // Render the movies.hbs template and pass the movies data
        res.render('movies', { movies });
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Internal Server Error');
    }
});

const Moviesroute = require("./routes/index.js");
app.use('/',Moviesroute);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
