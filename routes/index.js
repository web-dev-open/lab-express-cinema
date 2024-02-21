const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model.js");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req, res, next) =>{
    Movies.find()
    .then(allMoviesFromDB => {
      
      console.log('Retrieved books from DB:', allMoviesFromDB);

      res.render('movies', { movies: allMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);

     
      next(error);
    });
});


router.get('/movies/:id', async (req, res) => {
  try {
    const movies = await Movies.findById(req.params.id);
    if (!movies) {
      res.status(404).render('not-found');
      return;
    }
    res.render('movie', { moviesData });
  } catch (err) {
    console.error('Error fetching movie details:', err);
    res.status(500).render('error');
  }
});







module.exports = router;
