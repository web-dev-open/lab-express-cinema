const express = require('express');
const router = express.Router();
let MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// MOVIES PAGE
router.get('/movies', (req, res, next) => {
    MovieModel.find()
        .then((movie) => {
          res.render('movies.hbs', {movie})
      })
      .catch((err) => {
        console.log('Some error in finding', err)
      })
  })


  router.get('/movies/:id', (req, res, next) => {
    let {id} = req.params
    MovieModel.findById(id)
        .then((movie) => {
          console.log(movie.stars)
          res.render('movie/details.hbs', {movie})
      })
      .catch((err) => {
        console.log('Some error in finding', err)
      })
  })




module.exports = router;
