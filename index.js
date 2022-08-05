const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./fetchMyIP');

const object = { latitude: '49.2760', longitude: '-123.13000' };

fetchISSFlyOverTimes(object, (err, times) => {
  if (err) console.log('AAAAAAGH ', err);
  console.log(times);
});

/*
fetchCoordsByIP('NOT PUTTING MY IP UP THERE HAHA', (error, coord) => {
  if (error) {
    console.log("AAAAAAAAAAH", error);
    return;
  }
  if (coord) console.log('coords: ', coord);
});
fetchMyIP((error, ip) => {
  if (error) console.log("AAAARGH!:", error);
  if (ip) console.log(ip);
});
*/