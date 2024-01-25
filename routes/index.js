const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/allmovies',(req,res)=>{

    Movies.find()
    .then(movieFromDB=>{
        res.render('movie/movies-list.hbs',{movies:movieFromDB})
    })
    .catch(err=>console.log("error ",err))
    
})


router.get('/movie/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    console.log("Movie id ",movieId)

    Movies.findById(movieId)
    .then(movie=>res.render("movie/details.hbs",{movie}))
    .catch(err=>next(err))

});

  


module.exports = router;