const crud = require('../services/db/crud');
const crypto = require('crypto')

const { User } = require('../model/users.js');
const client = require('../services/db/connection');
const { ObjectID } = require('bson');

const userCollection = client.getCollection("users");
const watchlistCollection = client.getCollection("watchlist");

//create a user
const createUser = async (req, res) => {
  try {
    const id = crypto.randomBytes(4).toString('hex');
    const name = req.body.name;
    const mail = req.body.mail;
    const favoris = "";

    const user = new User(id, name, mail, favoris);

    const result = await userCollection.insertOne(user);

    res.status(200).json(result);
    
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const getAllUser = async(req, res) => {
  try {
    const cursor = userCollection.find();
    const result = await cursor.toArray();
    if (result.length > 0) {
      let html = "";
      result.forEach(user => {
        //display the html page
        html += `<tr><td>${user._id}</td><td>${user.name}</td><td>${user.mail}</td></tr>`;
      });
      html += "</tbody></table>";
      res.send(html);
    } else {
      res.status(204).json({msg: "User not found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}


  const updateUser = async(req, res) =>{
    try{
    let id = new ObjectID(req.params.id);
    const nName = req.params.name;
    let result = await userCollection.updateOne({_id : id}, {$set: {name : nName}});
  }catch(error){
    console.error(error);
    res.status(500).json(error);
    }

  }

  const getUserWatchlist = async(req,res)=>{
    try{
      
      const cursor = watchlistCollection.find({ownerId : req.params.owner})
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

//add to favoris a watchlist
const addFavoris = async (req, res) => {
  const userId = req.params.userId;
  const watchlistId = req.params.watchlistId;
  try {
    const user = await userCollection.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { favoris: watchlistId } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  
  
  
/*Update User data */
const updateUserInfo = async(req, res)=>{
  let id = new ObjectID(req.params.id);
  const newName = req.body.name;
  const newMail = req.body.mail;

  try{
    const result = await userCollection.updateMany({_id:id} ,{$set:{name : newName ,mail: newMail}});
    res.status(200).send("Your data has been modified");
  }catch(e){
    console.error(error);
    res.status(500).json({ message: error.message });

  }
}


  



module.exports = {createUser, getAllUser, updateUser, getUserWatchlist, updateUserInfo, addFavoris };

