const express = require ("express");
const {
    creerUtilisateur, 
    ajoutEntite

} = require('../controller/users');
const router = express.Router();

router.route("/users").post(creerUtilisateur);
router.route("/items").post(ajoutEntite)

module.exports = router;

