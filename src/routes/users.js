const express = require ("express");

const router = express.Router();
const userControllers = require("../controllers/users.js");
const {createUser, getAllUser, getUserWatchlist, updateUserInfo, addFavoris } = require('../controllers/users')

router.route('/users/create').post(createUser) ;
router.route('/users/all').get(getAllUser);
router.route('/users/getUserWatchlist/:owner').get(getUserWatchlist);
router.route('/users/update/:id').post(updateUserInfo);
router.route('/users/:userId/favorites/:watchlistId').post(addFavoris);




module.exports = router;


















