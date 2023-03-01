const {Watchlist} = require('../model/watchlist.js');
const client = require('../services/db/connection');
const crypto = require('crypto');
const { ObjectID } = require('bson');

const collection = client.getCollection("watchlist");

const createWatchlist = async(req, res)=>{
    try{
        const owner = req.body.owner;
        const id = crypto.randomBytes(4).toString('hex');
        const name = req.body.name
        const movie = req.body.item;
        const state = req.body.state;

        let watchlist = new Watchlist(owner, id, name, movie, state);

        const result = await collection.insertOne(watchlist);

        res.status(200).json(result);
    }
    catch(e){
        console.error(e)
        res.statut(500).send('couldn\'t create an watchlist')
    }
}


const modifyItem = async (req, res) => {
    try {
        const id = req.params.id;
        const originalItem = await collection.findOne({ id });

        const result = await collection.updateOne(
            { id },
            { $set: { movie: req.body.movie } }
        ); 
        //récupère le nom du film modifié et le nom du film original
        const movieName = req.body.movie;
        const originalMovieName = originalItem.movie;
        res.status(200).send(`The movie "${originalMovieName}" has been modified to "${movieName}"!`);
    } catch (e) {
        console.error(e)
        res.status(500).send("Couldn't modify the item in the watchlist.")
    }
}

const showWatchlist = async(req, res) => {
    try {
      const cursor = collection.find();
      const result = await cursor.toArray();
        res.status(200).json(result);
      
    } catch (e) {
      console.error(e);
      res.status(500).send('Internal Server Error'); // send an error response if there is an error
    }
  }
  



module.exports = {createWatchlist, modifyItem, showWatchlist};