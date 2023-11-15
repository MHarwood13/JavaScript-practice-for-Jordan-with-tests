const { tripler } = require('../09-tripler.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('tripler()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return a new array containing three times every number in [2, 7, 4]', () => {
    const result = tripler([2, 7, 4]);
    expect(result).to.deep.equal([6, 21, 12]);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return a new array containing three times every number in [-5, 10, 0, 11]', () => {
    const result = tripler([-5, 10, 0, 11]);
    expect(result).to.deep.equal([-15, 30, 0, 33]);
    expect(consoleLogSpy.called).to.be.false;
  });
});
