const express = require('express');
const router = express.Router();

// Define routes for your pages
router.get('/', (req, res) => {
  res.render('homepage', { title: 'Home' });
});

router.get('/aboutme', (req, res) => {
  res.render('aboutme', { title: 'About' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
