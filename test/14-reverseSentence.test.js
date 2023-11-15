const { reverseSentence } = require('../14-reverseSentence.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('reverseSentence()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return a new sentence with reversed word order for "I am pretty hungry"', () => {
    const result = reverseSentence('I am pretty hungry');
    expect(result).to.equal('hungry pretty am I');
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return a new sentence with reversed word order for "follow the yellow brick road"', () => {
    const result = reverseSentence('follow the yellow brick road');
    expect(result).to.equal('road brick yellow the follow');
    expect(consoleLogSpy.called).to.be.false;
  });
});
