// Core node libraries
const path = require('path');
// import dependencies
const express = require('express');

// Setup const to hold port
const port = process.env.PORT || 3005;
// Setup const to hold path to public directory
const publicDir = path.join(__dirname, '../public');

// Initialize express in an const
const app = express();

// Set the project to serve static files
app.use(express.static(path.join(publicDir)));

// Set view engine to handelbars
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
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

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'snowing',
    temperature: -10.9,
  });
});

app.listen(port, () => console.log(`App is running on port ${port}`));
