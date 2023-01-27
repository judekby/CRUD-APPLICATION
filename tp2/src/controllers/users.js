a
const {insertOne, findOne} = require('../services/db/crud');
// const userSchemas  reqiore('')


async function findUser(req, res, next){
    try{
        const result = await findOne('users', {name: 'toto'});
        return res.send(result);
    }
    catch(e){
        console.log(e)
    }
}

  
  module.exports = {
      createUser,
      findUser
  };