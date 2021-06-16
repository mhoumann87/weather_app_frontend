// Get postman-request
const request = require('postman-request');

// get the api key
const apiKey = require('../api-keys');

const geoCode = (address, callback) => {
  // set up the url
  const rawUrl = `http://api.positionstack.com/v1/forward?access_key=${apiKey.geo}&query=${address}`;

  // URI encode the url
  const url = encodeURI(rawUrl);

  // Get the location info from positionstack and return it
  request({ url, json: true }, (error, { body }) => {
    //console.log(response.body.data[0]);
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (!body.data[0]) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name,
        country: body.data[0].country,
      });
    }
  });
};

// Export the function to use in other files
module.exports = geoCode;
