const { fetchMyIP } = require('../fetchMyIP');
const assert = require('chai').assert;
describe('#fetchMyIP function tests:', () => {
  it('should return something that looks like an IP address', () => {
    fetchMyIP((err, ip) => {
      if (err) console.error(err);
      assert.isTrue(ip.split('.').length === 4);
    });
  });
});