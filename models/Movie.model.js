const mongoose=require('mongoose')

const Movie=mongoose.model('Movie', {
    title:String,
    director:String,
    start:Array,
    image:String,
    description:String,
    showtimes:Array
});

module.exports= Movie;