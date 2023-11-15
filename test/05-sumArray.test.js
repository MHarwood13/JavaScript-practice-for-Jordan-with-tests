const { sumArray } = require('../05-sumArray.js');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('sumArray()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should return the total sum of all the numbers in the array', () => {
    // Example 1
    expect(sumArray([5, 6, 4])).to.equal(15);

    // Example 2
    expect(sumArray([7, 3, 9, 11])).to.equal(30);

    // Ensure that the function does not use console.log()
    expect(consoleLogSpy.called).to.be.false;
  });
});
