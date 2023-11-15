const { factorsOf } = require('../06-factorsOf.js');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('factorsOf()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return [1, 5] for 5', () => {
    const result = factorsOf(5);
    expect(result).to.deep.equal([1, 5]);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return [1, 2, 4, 8] for 8', () => {
    const result = factorsOf(8);
    expect(result).to.deep.equal([1, 2, 4, 8]);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return [1, 3, 9] for 9', () => {
    const result = factorsOf(9);
    expect(result).to.deep.equal([1, 3, 9]);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 4
  it('should return [1, 2, 5, 10] for 10', () => {
    const result = factorsOf(10);
    expect(result).to.deep.equal([1, 2, 5, 10]);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 5
  it('should return [1, 2, 3, 4, 6, 8, 12, 24] for 24', () => {
    const result = factorsOf(24);
    expect(result).to.deep.equal([1, 2, 3, 4, 6, 8, 12, 24]);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 6
  it('should return [1, 2017] for 2017', () => {
    const result = factorsOf(2017);
    expect(result).to.deep.equal([1, 2017]);
    expect(consoleLogSpy.called).to.be.false;
  });
});
