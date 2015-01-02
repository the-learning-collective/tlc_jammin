var fs = require('fs');
var cheerio = require('cheerio');

//read html file
var wnyc_html = fs.readFileSync('wnyc_2014_deaths.html').toString();

//give html-string to cheerio
var $ = cheerio.load(wnyc_html);

//table variables
var dates = [];
var names = [];
var ages = [];
var types = [];

//counters
var counter = 0;
var ped_counter = 0;
var cycle_counter = 0;
var car_counter = 0;
var unknownType_counter = 0;

//variable to store csv
var csv = '';

//for each 'div class="aDeath"
$('div.aDeath').each(function(i, elem) {

  //load the div into cheerio
  var html = $(this).html();
  var oneDiv = cheerio.load(html);
  
  //add type field
  if ( oneDiv(this).hasClass('pedestrian') ) {
    types.push('ped');
    ped_counter += 1;
  } else if ( oneDiv(this).hasClass('cyclist') ) {
    types.push('cyclist');
    cycle_counter += 1;
  } else if ( oneDiv(this).hasClass('driver') ) {
    types.push('driver')
    car_counter += 1; 
  } else if ( oneDiv(this).hasClass('passenger') ) {
    types.push('passenger');
    car_counter += 1;
  } else {
    types.push('unknown');
    unknownType_counter += 1;
  }

  //split names and ages into two separate fields
  oneDiv('div.info h3').each(function(i, elem) {
    var text = $(this).text();
    var person = splitNameAge(text);
    names.push(person.name);
    ages.push(person.age);
  })

  //dates
  var date = oneDiv('div.info strong').text();
  var formatedDate = convertToNumberDate(date);
  dates.push(formatedDate);

  //total counter
  counter += 1;

})

csv += 'name, age, date, type';
csv += '\n';

for (var i = 0; i < counter.length; i++) {
  csv += names[i] + ',';
  csv += ages[i] + ',';
  csv += dates[i] + ',';
  csv += types[i];
  csv += '\n';
}

var added_total_of_type_counters = ped_counter + cycle_counter + car_counter + unknownType_counter;

//data as arrays
var file = fs.createWriteStream('arrays.txt');

file.on('error', function(err) { console.log(err);  });
file.write('var names = [');
names.forEach(function(value){
  file.write('"' + value + '"' + ',');
})
file.write('];');
file.write('\n');
file.write('var ages = [');
ages.forEach(function(value){
  file.write('"' + value + '"' + ',');
})
file.write('];');
file.write('\n');
file.write('var dates = [');
dates.forEach(function(value){
  file.write('"' + value + '"' + ',');
});
file.write('];');
file.end();

if( added_total_of_type_counters === counter) {
  // fs.writeFileSync('death2014.csv', csv);
  console.log('peds: ' + ped_counter);
  console.log('cyclists: ' + cycle_counter);
  console.log('car users: ' + car_counter);
  console.log('unknown type: ' + unknownType_counter);
  console.log('total: ' + counter);
} else {
  console.log('there\'s a problem with the counts');
  console.log('cycle+ped+carUsers+unknowns: ' + added_total_of_type_counters);
  console.log('peds: ' + ped_counter);
  console.log('cyclists: ' + cycle_counter);
  console.log('car users: ' + car_counter);
  console.log('unknown type: ' + unknownType_counter);
  console.log('total: ' + counter);
}


//input: string
//output: object with name and age as properties
function splitNameAge (nameAge) {
  var person = {};

  if(nameAge.indexOf(',') !== -1) {
    var commaPosition = nameAge.indexOf(',');
    person['name'] = nameAge.slice(0, commaPosition);
    var textAge = nameAge.slice((commaPosition + 1));
    var numAge = parseInt(textAge.replace(/\D*/, ''));
    
    if (numAge) {
      person['age'] = numAge;  
    } else {
      person['age'] = 'unknown';
    } 

  } else {
    person['name'] = nameAge;
    person['age'] = 'unknown';
  }

  return person;
}

function convertToNumberDate (textDate) {
  var spacePosition = textDate.indexOf(' ');
  var day = textDate.slice(spacePosition + 1);
  if (day.length === 1) {
    day = "0" + day;
  }

  var textMonth = textDate.slice(0, spacePosition);
  var month;
  
  switch (textMonth) {
    case "January":
      month = "01";
      break;
    case "February":
      month = "02";
      break;
    case "March":
      month = "03";
      break;
    case "April":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "June":
      month = "06";
      break;
    case "July":
      month = "07";
      break;
    case "August":
      month = "08";
      break;
    case "September":
      month = "09";
      break;
    case "October":
      month = "10";
      break;
    case "November":
      month = "11";
      break;
    case "December":
      month = "12";
      break;
    default:
      month = "error";
      console.log('there\'s error in a date!');
      break;
  }

  var newDate = month + '-' + day + '-' + '14';
  return newDate;
}


// module.exports = {

//   splitNameAge: splitNameAge

// }

