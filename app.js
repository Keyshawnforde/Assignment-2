const express = require('express');
const app = express();
const port = process.env.port || 3000; //Chooses desired port

app.set('view engine', 'ejs'); //Sets EJS as view engine

app.use(express.static('public')); //Serve static files from 'main' directory

app.get('/', (req, res) => 
{res.render('home', {title: 'Home Page', content: 'Welcome to my Home page.'})
});

app.get('/', (req, res) => 
{res.render('projects', {title: 'Projects'})
});

app.get('/', (req, res) => 
{res.render('about', {title: 'About Me'})
});

app.get('/', (req, res) => 
{res.render('contact', {title: 'Contact'})
});

app.listen(port, () =>{
    console.log('Server is running on port ${port}')
});