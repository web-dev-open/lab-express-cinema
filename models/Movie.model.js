const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const MovieModel = model("movie", movieSchema);

module.exports = MovieModel;
