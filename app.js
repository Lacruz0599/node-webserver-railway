
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static( 'public' ) );

app.get('/', (req, res) => {
    res.render( 'home', {
        nombre: 'Cesar',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render( 'generic', {
        nombre: 'Cesar',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render( 'elements', {
        nombre: 'Cesar',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    //res.send('404| page not found');
    res.send( 'Pagina no encontrada' );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })