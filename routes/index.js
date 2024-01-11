const express = require("express");
const moviesModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  //make API call here
  moviesModel
    .find()
    .then((movies) => {
      res.render("movies.hbs", { movies });

      console.log("Movies fetched", res);
    })
    .catch((err) => {
      console.log("Movies fetch failed", err);
    });
});

router.get("/movieInfo/:id", (req, res, next) => {
  //make API call here
  const { id } = req.params;
  moviesModel
    .findById(id)
    .then((movie) => {
      res.render("movieInfo.hbs", { movie });

      console.log("Movie fetched", res);
    })
    .catch((err) => {
      console.log("Movie fetch failed", err);
    });
});
module.exports = router;
