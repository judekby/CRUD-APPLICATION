const express = require('express');
const mongobd = require('mongodb');
// const url = require('url');

const bdd = require("./src/services/db/connection.js");
const routes = require("./src/routes/index.js");

bdd.connectTodB();

const PORT = 3000;
routes.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});