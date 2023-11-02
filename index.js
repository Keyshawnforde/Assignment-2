const express = require('express');
const app = express();
const port = 3000; //Chooses desired port

app.set('view engine', 'ejs'); //Sets EJS as view engine

app.use(express.static('main')); //Serve static files from 'main' directory

app.get('/', (req, res) => 
{res.render('homepage')});

app.get('/', (req, res) => 
{res.render('projects')});

app.get('/', (req, res) => 
{res.render('aboutme')});

app.get('/', (req, res) => 
{res.render('contact')});

app.listen(port, () =>{
    console.log('Server is running on port ${port}')
});