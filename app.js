const express = require('express');
const app = express();
const port = process.env.port || 3000; //Chooses desired port

app.set('view engine', 'ejs'); //Sets EJS as view engine

app.use(express.static('public')); //Serve static files from 'main' directory

app.get('/', (req, res) => 
{res.render('homepage', {title: 'Home Page'})
});

app.get('/', (req, res) => 
{res.render('projects', {title: 'Projects'})
});

app.get('/', (req, res) => 
{res.render('aboutme', {title: 'About Me'})
});

app.get('/', (req, res) => 
{res.render('contact', {title: 'Contact'})
});

const routes = require('./controllers/index');
app.use('/', routes);

app.listen(port, () =>{
    console.log('Server is running on https://localhost:${port}')
});