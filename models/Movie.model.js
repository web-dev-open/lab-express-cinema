const {Schema,model, } = require('mongoose');

const MovieSchema = new Schema({
    title:String,
    director:String,
    stars:[String],
    image:String,
    description:String,
    showTimes:[String]
})


const Movie = model('Movie',MovieSchema);


module.exports = Movie;