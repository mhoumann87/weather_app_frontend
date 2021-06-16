// Core node libraries
const path = require('path');
// import dependencies
const express = require('express');
const hbs = require('hbs');

// Initialize express in an const
const app = express();

// Setup const to hold port
const port = process.env.PORT || 3005;

// Define paths for express config
// Setup const to hold path to public directory
const publicDir = path.join(__dirname, '../public');
// Set up path to template directory
const viewDir = path.join(__dirname, '../templates/views');
// Path to partials
const partialsDir = path.join(__dirname, '../templates/partials');

// Set the project to serve static files
app.use(express.static(path.join(publicDir)));

// handlebar configuration
// tell express to use handlebar
app.set('view engine', 'hbs');
// set the directory for the handlebar files
app.set('views', viewDir);
// Setup hbs to use partials
hbs.registerPartials(partialsDir);

// Setup routes for the site

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    name: 'Michael Houmann',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Not found',
    page: 'Help article not found',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You have to provide an address',
    });
  }

  res.send({
    forecast: 'snowing',
    temperature: -10.9,
    address: req.query.address,
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Not found',
    page: 'Page is not found',
  });
});

// "Start" the server
app.listen(port, () => console.log(`App is running on port ${port}`));
