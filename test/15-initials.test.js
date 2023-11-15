const { initials } = require('../15-initials.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('initials()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return the initials for "anna paschall"', () => {
    const result = initials('anna paschall');
    expect(result).to.equal('AP');
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return the initials for "Mary La Grange"', () => {
    const result = initials('Mary La Grange');
    expect(result).to.equal('MLG');
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return the initials for "brian crawford scott"', () => {
    const result = initials('brian crawford scott');
    expect(result).to.equal('BCS');
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 4
  it('should return the initials for "Benicio Monserrate Rafael del Toro Sánchez"', () => {
    const result = initials('Benicio Monserrate Rafael del Toro Sánchez');
    expect(result).to.equal('BMRDTS');
    expect(consoleLogSpy.called).to.be.false;
  });
});
