// iss_promised.js will be a promise version for handling the async functions.
const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request('https://ipwho.is/' + ip);
};
const fetchISSFlyOverTimes = (body) => {
  const coords = { latitude: JSON.parse(body).latitude, longitude: JSON.parse(body).longitude };
  return request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const times  = JSON.parse(body).response;
      return times;
    })
    .catch(error => {
      console.log("There was a bird stuck in orbit.. or maybe just: ", error.message);
    });
};

module.exports = { nextISSTimesForMyLocation };
