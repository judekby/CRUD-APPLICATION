const express = require("express");
const router = express.Router();

const {createWatchlist, modifyItem, showWatchlist, deleteWatchlist} = require('../controllers/watchlist')

router.route('/watchlist/create').post(createWatchlist);
router.route('/watchlist/update/:id').put(modifyItem);
router.route('/watchlist/all').get(showWatchlist);
router.route('/watchlist/delete/:id').delete(deleteWatchlist);





module.exports = router;