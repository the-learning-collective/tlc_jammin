var scrape = require('./scrape');
var should = require('should');

describe('splitNameAge', function(){

  var person = scrape.splitNameAge('Raquel Calleja, age 41');

  it('should split name', function(){
    person.name.should.eql('Raquel Calleja');
  })

  it('should split age', function(){
    person.age.should.eql(41);
  
  })
})

