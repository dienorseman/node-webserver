require('dotenv').config()

const express = require('express');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT;

console.clear()

console.log(port)

app.use( express.static('public') )

app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)


app.get('/', (req, res) => {
    res.render('home', {
        title: 'Node App',
        name: 'Edgar renan'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Node App',
        name: 'Edgar Renan'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Node App',
        name: 'Edgar Renan'
    })
})

app.get('/hello', (req, res) => {
    res.send(`Hello ${req.headers['hello']}`);
});

app.listen( port, () => {
    console.log(`listening on ${port}`);
} )