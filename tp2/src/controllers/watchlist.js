const {Watchlist} = require('../model/watchlist.js');
const {InsertOne, findOne} = require('../services/db/crud');
const client = require('../services/db/connection');

const createWashlist = async(req, res)=>{
    try{
        let watchlist = new Watchlist(
            req.body.item,
            req.body.state,
            req.body.name
        );
    }
    catch(e){
        res.statut(500).send('couldn\'t create an item')
    }
}