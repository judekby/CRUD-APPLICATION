const crud = require('../services/db/crud');
const crypto = require('crypto')

const { User } = require('../model/users.js');
const client = require('../services/db/connection');
const { ObjectID } = require('bson');

const createUser = async (req, res) => {
  try {
    const id = crypto.randomBytes(4).toString('hex');
    const name = req.body.name;
    const user = new User(id,name);

    const result = await client.getCollection('users').insertOne(user);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

  const getAllUser = async(req, res) => {
    try{
      const cursor = client.getCollection("users").find();
      const result = await cursor.toArray();
      if(result.length > 0){
        res.status(200).json(result);
      }else{
        res.status(204).json({msg : "User not found"});
      }

    }catch (error) {
      console.error(error);
      res.status(500).json(error);
    }

  }

  const updateUser = async(req, res) =>{
    try{
    let id = new ObjectID(req.params.id);
    const nName = req.params.name;
    let result = await client.getCollection("users").updateOne({_id : id}, {$set: {name : nName}});
  }catch(error){
    console.error(error);
    res.status(500).json(error);
    }

  }

  const getUserWatchlist = async(req,res)=>{
    try{
      
      const cursor = client.getCollection("watchlist").find({ownerId : req.params.owner})
      const result = await cursor.toArray(); 
      if(result.length > 0){
        res.status(200).json(result[0]);
      }else{
        res.status(204).json({msg : "watchlist not found for this user"});
      }
      
    }catch(e){
      console.error(e);
      res.status(500).json(e);

    }   
}


  



module.exports = {createUser, getAllUser, updateUser, getUserWatchlist };

