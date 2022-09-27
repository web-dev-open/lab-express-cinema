const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render("movies.hbs", { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;
  MovieModel.findById(id)
    .then((movie) => {
      res.render("detail.hbs", { movie });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
