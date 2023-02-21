const crud = require('../services/db/crud');
const crypto = require('crypto')

const { User } = require('../model/users.js');
const client = require('../services/db/connection');

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

  



module.exports = {createUser, getAllUser};

