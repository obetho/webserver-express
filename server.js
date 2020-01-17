const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//Express HBS engi2ne
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Obetho'
    });
});

app.get('/about', (req, res) => {
    res.render('about');


});

app.get('/data', (req, res) => {
    res.send('Hello data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});