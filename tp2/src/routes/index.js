const express = require('express');
const app = express();
const users = require('./users');
const bodyparser = require("body-parser");

const routeUtilisateur = require("../routes/users");
const routeItem = require("../routes/movies");
const routeWatchlist = require("../routes/watchlist")
const path = require('path')

const metrics = {
    requestsCount: {},
};


app.set("view engine", "ejs")

app.use(bodyparser.urlencoded({ extended : true}))
// set view engine
// app.set("views", path.resolve(__dirname, "views/ejs"))




app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/users/create', (req, res) => {
    res.render('add_user');
})

app.get('/watchlist/create', (req, res) => {
    res.render('add_watchlist');
})
app.get('/movie/create', (req, res) => {
    res.render('add_movie');
})


app.use(routeUtilisateur);
app.use(routeItem);
app.use(routeWatchlist);


app.use((req, res, next) => {
    const currentUrlRequestsCount = metrics.requestsCount[req.url];
    metrics.requestsCount[req.url] = currentUrlRequestsCount
        ? currentUrlRequestsCount + 1
        : 1;
    return next();
});

app.use((req, res, next) => {
    console.log(req.url);
    return next();
});



app.use('/users', users);

//app.get('/', (req, res, next) => {
  //  return res.send('Hello World !');
//});

app.get('/health', (req, res, next) => {
    return res.status(200).json({ status: 'healthy' });
});

app.get('/metrics', (req, res, next) => {
    metrics.uptime = `${process.uptime().toFixed(2)} seconds`;
    return res.json(metrics);
});

module.exports = app; 