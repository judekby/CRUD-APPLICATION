const {Movie} = require('../model/movie.js');
const crud = require('../services/db/crud');
const client = require('../services/db/connection');
const crypto = require('crypto');
const { ObjectID } = require('bson');

const createMovie = async (req, res)=>{
    try{
        const id = crypto.randomBytes(4).toString('hex');
        const title = req.body.title;
        const language = req.body.language;
        const year = req.body.year;
        let movie = new Movie(id, title, language, year);

        let result = await client.getCollection("movies").insertOne(movie)

        res.status(200).json(result)
    }   catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

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


module.exports = {createMovie, getAll, getMovie}