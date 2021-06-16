// Get postman-request
const request = require('postman-request');

// Get the api key
const apiKey = require('../api-keys');

const weather = (lat, long, callback) => {
  // set up the url for weatherstack
  const rawUrl = `http://api.weatherstack.com/current?access_key=${apiKey.weather}&query=${lat},${long}&units=m`;
  // URI encode the url
  const url = encodeURI(rawUrl);

  // make the api call and return the result
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to get weather information', undefined);
    } else {
      callback(undefined, body.current);
    }
  });
};

// export the function
module.exports = weather;
