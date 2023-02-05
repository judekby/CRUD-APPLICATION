
const crud = require('../services/db/crud');
const crypto = require('crypto')

const {User} = require("../model/users.js")
const client = require ("../services/db/connection");

const createUser = async (req, res) => {
    try {
      let utilisateur = new User(
        req.body.name,
        req.body.adress,
        req.body.telephone,
        req.body.item,
        User.id = crypto.randomBytes(4).toString('hex')

      );
      let result = await crud.insertOne("users", utilisateur);
      res.status(200).send('Insert OK');
    } catch (error) {
      res.status(500).send('couldn\'t create the user')
    }
  };

  const getAllUser = async() =>{
    return await crud.findAll('users', {})
  }

  



module.exports = {createUser, getAllUser};

