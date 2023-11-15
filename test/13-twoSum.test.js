const { twoSum } = require('../13-twoSum.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('twoSum()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return true if two distinct numbers in [1, 7, 3, 0, 2] add up to 5', () => {
    const result = twoSum([1, 7, 3, 0, 2], 5);
    expect(result).to.be.true;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return false if two distinct numbers in [1, 7, 3, 0, 2] add up to 6', () => {
    const result = twoSum([1, 7, 3, 0, 2], 6);
    expect(result).to.be.false;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return true if two distinct numbers in [4, 6, 2, 3] add up to 8', () => {
    const result = twoSum([4, 6, 2, 3], 8);
    expect(result).to.be.true;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 4
  it('should return false if two distinct numbers in [4, 6, 2, 3] add up to 11', () => {
    const result = twoSum([4, 6, 2, 3], 11);
    expect(result).to.be.false;
    expect(consoleLogSpy.called).to.be.false;
  });
});
