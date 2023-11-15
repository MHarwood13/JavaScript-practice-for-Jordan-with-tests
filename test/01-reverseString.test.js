const chai = require('chai');
const expect = chai.expect;
const { reverseString } = require('../01-reverseString.js');

describe('reverseString()', () => {
  it('should reverse a string', () => {
    expect(reverseString('fish')).to.deep.equal('hsif');
    expect(reverseString('marathon')).to.deep.equal('nohtaram');
  });
});
