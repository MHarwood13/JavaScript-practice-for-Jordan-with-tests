const { myIndexOf } = require('../07-myIndexOf.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('myIndexOf()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return the correct index when the target is found in the array (Example 1)', () => {
    const result = myIndexOf(['a', 'b', 'c', 'e'], 'c');
    expect(result).to.equal(2);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return the correct index when the target is found in the array (Example 2)', () => {
    const result = myIndexOf(['a', 'b', 'c', 'e'], 'e');
    expect(result).to.equal(3);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return -1 when the target is not found in the array (Example 3)', () => {
    const result = myIndexOf(['a', 'b', 'c', 'e'], 'z');
    expect(result).to.equal(-1);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 4
  it('should return the correct index when the target is found in the array (Example 4)', () => {
    const result = myIndexOf([43, -7, 11, 13, 43], 43);
    expect(result).to.equal(0);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 5
  it('should return -1 when the target is not found in the array (Example 5)', () => {
    const result = myIndexOf([43, -7, 11, 13], 1);
    expect(result).to.equal(-1);
    expect(consoleLogSpy.called).to.be.false;
  });
});
