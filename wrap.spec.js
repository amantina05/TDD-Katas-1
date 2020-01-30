const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Return string if colNum is 0', () => {
    expect(wrap('cheese', 0)).to.equal('');
  });

  it('Return string if colNum is greater than the strings length', () => {
    expect(wrap('cheese', 10)).to.equal('cheese');
  });
  it('Insert a line break when the string is bigger than the colNum ', () => {
    expect(wrap('i hope my side wins', 8)).to.equal(
      `i hope
      my side
      wins`
    );
  });
});

// it('', () => {
//   expect(wrap('',))
//   .to.equal()
// })
