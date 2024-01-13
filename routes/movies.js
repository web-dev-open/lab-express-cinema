const express = require('express');
const router = express.Router();


// require the Drone model here
const movieModel = require('../models/Movies.model')

router.get('/movies', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  movieModel.find()
  .then((movies) => {
    res.render("movies/movies.hbs", {movies})
  }).catch((err) => {
    console.log('Failed!',err)
  });

});

router.get('/movies/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  movieModel.findById(id)
  .then((movies) => {
    res.render('movies/details.hbs',{movies})
  }).catch((err) => {
    console.log('Failed!')
  });
});

// router.get('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
//   res.render("drones/create-form.hbs")
// });

// router.post('/drones/create', (req, res, next) => {
//   //console.log(req.body)
//   const {name,propellers,maxSpeed} = req.body
//   droneModel.create({name,propellers,maxSpeed})
//   .then((result) => {
//     res.redirect("/drones")
//   }).catch((err) => {
//     console.log('Failed!')
//   });
// });

// router.get('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
//   const {id} = req.params;
//   droneModel.findById(id)
//   .then((drones) => {
//     res.render('drones/update-form.hbs',{drones})
//   }).catch((err) => {
//     console.log('Failed!')
//   });
// });

// router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
//   const {id} = req.params
//   const {name,propellers,maxSpeed} = req.body
//   droneModel.findByIdAndUpdate(id, {name,propellers,maxSpeed})
//   .then((result) => {
//     res.redirect('/drones')
//   }).catch((err) => {
//     console.log('Failed!')
//   });
 
// });

// router.get('/drones/:id/delete', (req, res, next) => {
//   // Iteration #5: Delete the drone
//   // ... your code here
//   const {id} = req.params
//   droneModel.findByIdAndDelete(id)
//   .then((result) => {
//     res.redirect('/drones')
//   }).catch((err) => {
//     console.log('Failed!')
//   });
// });

module.exports = router;
