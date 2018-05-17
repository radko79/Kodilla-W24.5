
const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('Calculate total points', () => {
	it('Should return 131.8 points', () => {
      const actual = (calculateTotalPoints(111, 90, 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4)).toFixed(1);
      const expected = 132.8;
      assert.equal(actual, expected);
  });

  it('Should return 137.3 points', () => {
      const actual = (calculateTotalPoints(134, 150, 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4)).toFixed(1);
      const expected = 136.4;
      assert.equal(actual, expected);
  });

  it('Should return 208.3 points', () => {
      const actual = (calculateTotalPoints(227.5, 240, 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4)).toFixed(1);
      const expected = 208.3;
      assert.equal(actual, expected);
  });
});