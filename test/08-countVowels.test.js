const { countVowels } = require('../08-countVowels.js'); // Replace 'yourFileName' with the actual file name
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('countVowels()', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  // Example 1
  it('should return the correct number of vowels in the word "supercalifragilisticexpialidocious"', () => {
    const result = countVowels('supercalifragilisticexpialidocious');
    expect(result).to.equal(16);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 2
  it('should return the correct number of vowels in the word "apple"', () => {
    const result = countVowels('apple');
    expect(result).to.equal(2);
    expect(consoleLogSpy.called).to.be.false;
  });

  // Example 3
  it('should return the correct number of vowels in the word "pizza"', () => {
    const result = countVowels('pizza');
    expect(result).to.equal(2);
    expect(consoleLogSpy.called).to.be.false;
  });
});
