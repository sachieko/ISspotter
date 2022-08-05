const { nextISSTimesForMyLocation } = require('./nextISSTimesForMyLocation');

nextISSTimesForMyLocation((error, timesArray) => {
  if (error) {
    console.log("In the moment of truth an error happened: ", error);
  }
  for (const time of timesArray) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});


/*
fetchISSFlyOverTimes(object, (err, times) => {
  if (err) console.log('AAAAAAGH ', err);
  console.log(times);
});
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