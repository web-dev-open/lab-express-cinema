// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");
const MovieData = require("../seeds/movies.seed")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

// Movie.create(MovieData)
// .then(MoviesFromDb=>{
//  MoviesFromDb.forEach(movie=>{
//   console.log(`Movie Name : ${movie.title}`)
//  })
// })
// .catch(err=>console.log("error ",err))