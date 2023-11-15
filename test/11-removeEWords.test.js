const { removeEWords } = require('../11-removeEWords.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('removeEWords()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return a new string containing only words without the letter "e" in "What time is it everyone?"', () => {
    const result = removeEWords('What time is it everyone?');
    expect(result).to.equal('What is it');
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return a new string containing only words without the letter "e" in "Enter the building"', () => {
    const result = removeEWords('Enter the building');
    expect(result).to.equal('building');
    expect(consoleLogSpy.called).to.be.false;
  });
});
