// Will make a single API request to retrieve user's IP address, thus that information won't be shared out since it's not stored in the program.
// Input: - A callback (return error or IP as a string)
const request = require('request');
const fetchMyIP = (callback) => {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (body) {
      let string = JSON.parse(body).ip;
      callback(null, string);
    }
  });
};
module.exports = { fetchMyIP };