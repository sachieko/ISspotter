/* nextISSTimesForMyLocation function
* Uses 3 different API requests in order to find the next 5 upcoming ISS flyovers for users location.
* Input:
* - A callback(error, result)
* Returns:
An error if it occurs
The fly-over times as an array if successful [{ risetime: number, duration: number }, ... ]
*/
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./fetchMyIP');
const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((err, ipAdd) => {
    if (err) {
      return callback(err, null);
    }
    fetchCoordsByIP(ipAdd, (err, coords) => {
      if (err) {
        return callback(err, null);
      }
      fetchISSFlyOverTimes(coords, (error, times) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, times);
      });
    });
  });
};
module.exports = { nextISSTimesForMyLocation };