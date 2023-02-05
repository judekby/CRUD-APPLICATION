const express = require ("express");

const router = express.Router();
const moviesControllers = require("../controllers/movies.js");

router.post('/movies/create', async(req, res) => {
  if(req.body.title==undefined){
  res.status(400).json({
      "route": "/movies/create",
      "return": "An object representing all movies"
    });
    return;
  }

  const movies = await moviesControllers.createMovie();
  return res.json(users);
});


router.post('/movies/getall', async(req, res) => {
    const users = await moviesControllers.getAll();
    return res.json(users);
  });


  module.exports = router;










