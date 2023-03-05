const express = require ("express");

const router = express.Router();
const userControllers = require("../controllers/users.js");
const {createUser, getAllUser, getUserWatchlist, updateUserInfo } = require('../controllers/users')

router.route('/users/create').post(createUser) ;
router.route('/users/all').get(getAllUser);

// app.get('/', (req, res) => {
//     res.render('index');
// })

// router.route("/users/create").post(async (req, res) => {
//     if(req.body.name==undefined){
//       res.render("pages/index")
//       return;
//     }
//     const user = await userControllers.createUser(req.body.name+'');

// })


router.route('/users/getUserWatchlist/:owner').get(getUserWatchlist);
router.route('/users/update/:id').post(updateUserInfo);


// router.route("/users/create").post(async (req, res) => {
//     if(req.body.name==undefined){
//       res.render("pages/index")
//       return;
//     }
//     const user = await userControllers.createUser(req.body.name+'');

// })



module.exports = router;




















// const express = require("express");
// // const { createUser } = require("../controllers/users");
// const router = express.Router();
// const userControllers = require("../controllers/users.js");



// router.route("/users/create").post(async (req, res) => {
//     if(req.body.name==undefined){
//       res.status(400).json();
//       return;
//     }
//     const user = await userControllers.createUser(req.body.name+'');

// })


// router.route("/users/create").post(createUser);
// router.route("users/getall").post(getAllUser);

// module.exports = router;

// router.post('/users/create', async(req, res) => {
//   if(req.body.username==undefined){
//     res.status(400).json({
//       "route": "/users/create",
//       "args": {
//         "username": "A String representing the name of this user"
//       },
//       "return": "An object representing the created user"
//     });
//     return;

//   });


