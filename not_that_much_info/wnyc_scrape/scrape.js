var fs = require('fs');
var cheerio = require('cheerio');

var wnyc_html = fs.readFileSync('wnyc.html').toString();
var $ = cheerio.load(wnyc_html);

var counter = 0;
var dates = [];
var names_ages = [];
var names = [];
var ages = [];
var csv = '';

$('div.aDeath').each(function(i, elem) {

  var html = $(this).html();
  var oneDiv = cheerio.load(html);

  oneDiv('div.info h3').each(function(i, elem) {
    var text = $(this).text();
      names_ages.push(text);

  })

  var date = oneDiv('div.info strong').text();
  dates.push(date);

  counter += 1;

})

console.log("total: " + counter);

names_ages.forEach(function(value, i, array){
  var person = splitNameAge(value);
  names.push(person.name);
  ages.push(person.age);
})

  
csv += 'name, age, date';
csv += '\n';

for (var i = 0; i < dates.length; i++) {
  csv += names[i] + ',';
  csv += ages[i] + ',';
  csv += dates[i];
  csv += '\n';
}

fs.writeFileSync('death2014.csv', csv);

// var headers = [name, age, date];

//input: string
//output: object with name and age as properties
function splitNameAge (nameAge) {
  var person = {};

  var commaPosition = nameAge.indexOf(',');
  person['name'] = nameAge.slice(0, commaPosition);
  var textAge = nameAge.slice((commaPosition + 1));
  var numAge = parseInt(textAge.replace(/\D*/, ''));
  if (numAge) {
    person['age'] = numAge;  
  }
  
  return person;
}


// module.exports = {

//   splitNameAge: splitNameAge

// }


