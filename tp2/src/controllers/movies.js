const {Item} = require('../model/movie.js');
const {InsertOne, findOne} = require('../services/db/crud');
const client = require('../services/db/connection');

const createMovie = async (req, res)=>{
    try{
        let movie = new movie(
            req.body.title,
            req.body.language,
            req.body.year,
            req.body.id,
        )
        let result = await insertOne("movies", movie)
        res.status(200).json(result)

    }
    catch(error){
        console.log(error);
        res.status(500).json

    }
}

const getAll = async() =>{
    return await crud.findAll('movies', {})
  }

module.exports = {createMovie, getAll}