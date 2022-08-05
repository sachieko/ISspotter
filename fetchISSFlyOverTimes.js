//Makes an API request for mock upcoming ISS fly over times for the given lat/long coordinates.
// Input is an object with lat/long key-value pairs
// Return via callback is an array
const request = require('request');
const fetchISSFlyOverTimes = (coords, callback) => {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching flyovertimes. Response: ${body}`;
      callback(Error(msg), null);
    }
    if (JSON.parse(body)) {
      let times = JSON.parse(body).response;
      callback(null, times);
    }
  });
};
module.exports = fetchISSFlyOverTimes;