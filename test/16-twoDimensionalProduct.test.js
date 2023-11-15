const { twoDimensionalProduct } = require('../16-twoDimensionalProduct.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('twoDimensionalProduct()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return the total product of all numbers in the 2D array arrOne', () => {
    const result = twoDimensionalProduct([
      [6, 4],
      [5],
      [3, 1]
    ]);
    expect(result).to.equal(360);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return the total product of all numbers in the 2D array arrTwo', () => {
    const result = twoDimensionalProduct([
      [11, 4],
      [2]
    ]);
    expect(result).to.equal(88);
    expect(consoleLogSpy.called).to.be.false;
  });
});
