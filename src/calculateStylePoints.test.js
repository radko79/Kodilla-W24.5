const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	it('should return 5 marks', () => {
		const actual = calculateStylePoints([16, 17,17, 16.5, 16, 18]);
    const expected = "You need five Judge's marks";
    assert.equal(actual, expected);
  });
  it('Should return note 49.5', () =>{
    const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);
    const expected = 49.5;
    assert.equal(actual, expected);
  });
  it('Should return 0', () =>{
    const actual = calculateStylePoints([0,0,0,0,0]);
    const expected = 0;
    assert.equal(actual, expected);
  });
});