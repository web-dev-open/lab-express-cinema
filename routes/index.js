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
module.exports = router;
