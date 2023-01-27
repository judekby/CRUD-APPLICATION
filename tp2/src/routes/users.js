const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/users');

router.post('/create', createUser);

router.get("/find", findUser)
module.exports = router;