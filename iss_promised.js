// iss_promised.js will be a promise version for handling the async functions.
const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};
module.exports = { fetchMyIP };