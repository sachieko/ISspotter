const { nextISSTimesForMyLocation } = require('./nextISSTimesForMyLocation');
// If there are no errors, this will take each time object from the array of the JSON of time objects given,
// and create a new date object before setting the universal time by the seconds given in risetime.
// Finally, logs the date and durations(also in seconds) to the console.
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