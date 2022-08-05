const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(timesArray => {
    for (const time of timesArray) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(time.risetime);
      const duration = time.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  });