const { findValueWithMinLabel } = require('../../utils/utils.js');
const { findValueWithMaxLabel } = require('../../utils/utils.js');
const expect = require('chai').expect;

describe('find value with min label ', function() {
  
    it('should find value with min label', function() {
      expect(findValueWithMinLabel([ 'max:26000', 'min:25000' ])).to.equal(25000)
    })

})

describe('find value with max label ', function() {
  
    it('should find value with max label', function() {
      expect(findValueWithMaxLabel([ 'max:26000', 'min:25000' ])).to.equal(26000)
    })
    
})