// Core node libraries
const path = require('path');
// import dependencies
const express = require('express');

// Setup const to hold port
const port = process.env.PORT || 3000;
// Setup const to hold path to public directory
const publicDir = path.join(__dirname, '../public');

// Initialize express in an const
const app = express();

// Set the project to serve static files
app.use(express.static(path.join(publicDir)));

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'snowing',
    temperature: -10.9,
  });
});

app.listen(port, () => console.log(`App is running on port ${port}`));
