const chai = require('chai');
const expect = chai.expect;
const { range } = require('../02-range.js');

describe('range()', () => {
  it('should return an array containing all numbers from min to max inclusive', () => {
    expect(range(3, 10)).to.deep.equal([3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(217, 220)).to.deep.equal([217, 218, 219, 220]);
    expect(range(-5, 1)).to.deep.equal([-5, -4, -3, -2, -1, 0, 1]);
    expect(range(10, 3)).to.deep.equal([]);
  });
});
