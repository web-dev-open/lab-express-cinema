const express = require('express');
const router = express.Router();
const mongoose=require('mongoose')

const Movie = require('../models/Movie.model.js')
const data= require('../seeds/movies.seed.js')

Movie.insertMany(data)
/* GET home page */
router.get('/' , (req,res)=>{
    console.log('render homepage ')
    res.render('index.hbs')
})
router.get('/Movies', (req, res, next) => {
    Movie.find()
      .then(allMovies => {
        res.render('movies.hbs', { Movies: allMovies }); } )
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
      });
  });
  
  router.get('/Movies/:id', (req, res) => {
    const title= req.params;
    Movie.findOne(title)
    .then(theMovie =>{
        res.render('movie-details.hbs', { movie: theMovie })
    } )
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    });
  });

  module.exports = router;