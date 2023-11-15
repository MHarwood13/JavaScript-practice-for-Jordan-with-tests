// test/myIncludes.test.js
const { myIncludes } = require('../04-myIncludes.js');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('myIncludes()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return true for ["a", "b", "c", "e"] and "c"', () => {
    const result = myIncludes(['a', 'b', 'c', 'e'], 'c');

    expect(result).to.be.a('boolean');
    expect(result).to.be.true;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return true for ["a", "b", "c", "e"] and "a"', () => {
    const result = myIncludes(['a', 'b', 'c', 'e'], 'a');

    expect(result).to.be.a('boolean');
    expect(result).to.be.true;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return false for ["a", "b", "c", "e"] and "z"', () => {
    const result = myIncludes(['a', 'b', 'c', 'e'], 'z');

    expect(result).to.be.a('boolean');
    expect(result).to.be.false;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 4
  it('should return true for [43, -7, 11, 13] and 11', () => {
    const result = myIncludes([43, -7, 11, 13], 11);

    expect(result).to.be.a('boolean');
    expect(result).to.be.true;
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 5
  it('should return false for [43, -7, 11, 13] and 1', () => {
    const result = myIncludes([43, -7, 11, 13], 1);

    expect(result).to.be.a('boolean');
    expect(result).to.be.false;
    expect(consoleLogSpy.called).to.be.false;
  });
});
