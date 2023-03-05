const express = require ("express");
const router = express.Router();
const {createMovie, getAll, getMovie} = require("../controllers/movies.js");
const moviesControllers = require("../controllers/movies");


router.route('/movies/create').post(createMovie)
router.route('/movies/all').get(getAll)
router.route('/movies/:id').get(getMovie)


  module.exports = router;










