const { longWords } = require('../10-longWords.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('longWords()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return an array containing only words longer than 5 characters in ["bike", "skateboard", "scooter", "moped"]', () => {
    const result = longWords(['bike', 'skateboard', 'scooter', 'moped']);
    expect(result).to.deep.equal(['skateboard', 'scooter']);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return an array containing only words longer than 5 characters in ["couscous", "soup", "ceviche", "solyanka", "taco"]', () => {
    const result = longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco']);
    expect(result).to.deep.equal(['couscous', 'ceviche', 'solyanka']);
    expect(consoleLogSpy.called).to.be.false;
  });
});
