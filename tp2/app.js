const express = require('express');
const mongobd = require('mongodb');
// const url = require('url');

const bdd = require("./src/services/db/connection.js");
const routes = require("./src/routes/index.js");

bdd.connectTodB();

const port = 3000;
routes.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});