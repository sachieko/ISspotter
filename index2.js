const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(data => console.log(data));