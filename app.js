// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is a Node.js framework)
// https://www.npmjs.com/package/express
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// Set up Handlebars as the view engine
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();
app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);


// ❗ To handle errors.
require('./error-handling')(app);



// Define a route to render the movies page
app.get('/movies', async (req, res) => {
    try {
      // Fetch movies from the database 
      const movies = await MovieModel.find(); 
  
      res.render('movies', { title: 'Movies', movies });
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = app;
