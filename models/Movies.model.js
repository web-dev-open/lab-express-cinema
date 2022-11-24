// Iteration #1

const {Schema, model} = require('mongoose'); //de-structuring with this syntax

const movieSchema = new Schema( {
    title: String,
    director: String,
    stars: [{type: String}],
    image: String,
    description: String,
    showtimes:[{type:String}]

});

const movie = model("movie", movieSchema);

module.exports = movie;
