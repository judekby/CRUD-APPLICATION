
const {insertOne, findOne} = require('../services/db/crud');

const { User, Item } = require("../model/users")
const client = require ("../services/db/connection");
const creerUtilisateur = async (req, res) => {
    try {
      let utilisateur = new User(
        req.body.prenom,
        req.body.nom,
        req.body.adresse,
        req.body.telephone,
        req.body.watch_list
      );
      if (!Item.titre.includes(req.body.watch_list)) {
        res.status(400).send("Cet item n'existe pas dans la liste");
        return;
      }
      let result = await insertOne("users", utilisateur);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  

const ajoutEntite = async (req, res)=>{
    try{
        let item = new Item(
            req.body.titre,
            req.body.genre,
            req.body.date_sortie
        )
        let result = await insertOne("items", item)
        res.status(200).json(result)

    }
    catch(error){
        console.log(error);
        res.status(500).json

    }
}

function searchName(name, nameList) {
    return nameList.includes(name);
  }
module.exports = {creerUtilisateur, ajoutEntite};

