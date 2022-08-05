const request = require('request');
const fetchCoordsByIP = (ipString, callback) => {
  request(`https://ipwho.is/${ipString}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const success = JSON.parse(body).success;
    if (!success) {
      const msg = `Invalid IP when fetching coordinates for ${ipString}`;
      callback(Error(msg), null);
      return;
    }
    if (success) {
      let coords = { latitude: JSON.parse(body).latitude, longitude: JSON.parse(body).longitude };
      callback(null, coords);
    }
  });
};
module.exports = fetchCoordsByIP;