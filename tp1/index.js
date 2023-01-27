const express = require('express')
const app = express()
const url = require('url')
const process = require('process')
const port = 3000
const requestsCount = {}


app.listen(port,() =>{
    console.log("A l'attente de connexion")
})

app.use((req, res, next) => {
    console.log(`Time: ${new Date()}`)
    next()
});

app.use((req, res, next) => {
  if (!requestsCount[req.url]) {
    requestsCount[req.url] = 0
  }
  requestsCount[req.url]++
  next()
})

app.get('/metrics', (req, res) => {
  const uptime = process.uptime()
    res.json({
    status: 'healthy',
    requestsCount: requestsCount,
    uptime: uptime
  })
})


app.get('/welcome',(req, res) =>{
    res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle".')
})

app.get('/secret', (req, res) => {
    res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète');
});

app.get('/error', (req, res) => {
    res.status(500).json({ error: 'message' })
});

app.get('/img', function(req, res) {
    res.sendFile(`${__dirname}/img/soni.jpg`)
  
});

app.get('/redirectMe', function(req, res){
    res.redirect('https://www.iut-littoral.fr')
});

app.get('/users/:name', (req, res) => {
    res.send(`Bienvenue sur la page de ${req.params.name}`);
});

app.get('/somme', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = parseInt(a) + parseInt(b);
    res.send(`La somme de ${a} et ${b} est égale à ${result}`);
});

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Cette page n\'existe pas!' })
});


    






