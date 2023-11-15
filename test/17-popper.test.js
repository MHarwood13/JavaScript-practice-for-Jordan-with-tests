const { popper } = require('../17-popper.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('popper()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should remove the last 2 elements from arr1 and return [ "e", "d" ]', () => {
    const arr1 = ['a', 'b', 'c', 'd', 'e'];
    const result = popper(arr1, 2);
    expect(result).to.deep.equal(['e', 'd']);
    expect(arr1).to.deep.equal(['a', 'b', 'c']);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should remove the last element from arr2 and return [ "cabbage" ]', () => {
    const arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
    const result = popper(arr2, 1);
    expect(result).to.deep.equal(['cabbage']);
    expect(arr2).to.deep.equal(['kale', 'spinach', 'collard greens']);
    expect(consoleLogSpy.called).to.be.false;
  });
});
