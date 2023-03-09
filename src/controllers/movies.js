const {Movie} = require('../model/movie.js');
const crud = require('../services/db/crud');
const client = require('../services/db/connection');
const crypto = require('crypto');
const { ObjectID } = require('bson');
const axios = require('axios');

moviesCollection = client.getCollection("movies");

/*create a movie */
const createMovie = async (req, res)=>{
    try{
        const id = crypto.randomBytes(4).toString('hex');
        const title = req.body.title;
        const language = req.body.language;
        const year = req.body.year;
        let movie = new Movie(id, title, language, year);

        let result = await moviesCollection.insertOne(movie);

        res.status(200).json(result)
    }   catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

/* List all of the movies */
const getAll = async(req, res) =>{
    try{
        const cursor = client.getCollection("movies").find();
        const result =  await cursor.toArray();
        if(result.length > 0){
            res.status(200).json(result);
        }else{
            res.status(204).json({msg : "movie not found"})
        }
    }catch (error){
        console.error(error);
        res.status(500).json(error);

    }
};

/*get a movie by his ID */
const getMovie = async(req, res) =>{
    try{
        let id = new ObjectID(req.params.id)
        console.log(id)
        const cursor = client.getCollection("movies").find({_id : id });
        const result =  await cursor.toArray();
        if(result.length > 0){
            res.status(200).json(result[0]);
        }else{
            res.status(204).json({msg : "movie not found"})
        }
    }catch (error){
        console.error(error);
        res.status(500).json(error);

    }
};



//call the api
const getApiMovies = async (req, res) => {
    const apiKey = '515d3c5';
    const numResults = 100;
    const searchTerm = req.params.search;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&r=${numResults}`;

  try {
    const response = await axios.get(apiUrl);
    const movies = response.data.Search;
    //if results
    if (movies) {
      const result = movies.map(movie => ({
        title: movie.Title,
        genre: movie.Genre,
        rating: movie.imdbRating,
        year: movie.Year
      }));

      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'no results found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'an error occurs during getting the data' });
  }
};



module.exports = {createMovie, getAll, getMovie, getApiMovies}