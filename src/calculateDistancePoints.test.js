const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  it('should return return less then 60 points', () => {
    const actual = calculateDistancePoints (91.5, 90, 98);
    const expected = '47';
    assert.equal(actual, expected);
  });
  
  it('should return return more then 60 points', () => {
    const actual = calculateDistancePoints (99.5, 90, 98);
    const expected = '63';
    assert.equal(actual, expected);
  });
});
