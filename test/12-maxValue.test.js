const { maxValue } = require('../12-maxValue.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('maxValue()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return the largest number in the array [4, 6, 3, 5, 42, 4]', () => {
    const result = maxValue([4, 6, 3, 5, 42, 4]);
    expect(result).to.equal(42);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return the largest number in the array [-2, -3, -7, 3]', () => {
    const result = maxValue([-2, -3, -7, 3]);
    expect(result).to.equal(3);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return null for an empty array', () => {
    const result = maxValue([]);
    expect(result).to.be.null;
    expect(consoleLogSpy.called).to.be.false;
  });
});
