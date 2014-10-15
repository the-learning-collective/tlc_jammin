var fs = require('fs');
var _ = require('underscore');


//Reads file 
var geoFile = fs.readFileSync('Permits05_09_withPluto.json');

//turns file into object
var data = JSON.parse(geoFile);


//creates adddress for
field (var i = 0; i <data.features.length; i++) {
  var address = data.features[i].properties.Bushwick_3 + " " + data.features[i].properties.Bushwick_4;
  data.features[i].properties.address = address;
};


//renames
var newFields = ['bin', 'jobType', 'block', 'lot', 'workType', 'permitType', 'expDate', 'startDate', 'PermitteeName', 'PermitteeBis', 'PermitteePhone', 'PermitteeType', 'ownerType', 'nonProfit', 'ownerBis', 'ownerName', 'ownerAddress', 'ownerCity', 'ownerPhone', 'plutoOwner', 'LON', 'LAT', 'jobNum', 'res', 'issueDate'];
var oldFields = ['Bushwick_2', 'Bushwick_7', 'Bushwick_9', 'Bushwic_10', 'Bushwic_17', 'Bushwic_20', 'Bushwic_27', 'Bushwic_28', 'Bushwic_29', 'Bushwic_30', 'Bushwic_31', 'Bushwic_32', 'Bushwic_40', 'Bushwic_41', 'Bushwic_42', 'Bushwic_43', 'Bushwic_44', 'Bushwic_45', 'Bushwic_46', 'Bushwic_76', 'Bushwi_134', 'Bushwi_135', 'Bushwick_5', 'Bushwic_14', 'Bushwic_26'];

for (var i = 0; i <data.features.length; i++) {
  
  for (var p = 0; p < newFields.length; p++) {
    data.features[i].properties[newFields[p]] = data.features[i].properties[oldFields[p]];
    delete data.features[i].properties[oldFields[p]];
  };
};



//removes old fields
newFields.push('address');
for (var i = 0; i <data.features.length; i++) {
  data.features[i].properties = _.pick(data.features[i].properties, newFields);
};
//turns data back into string for file writing 
var stringData = JSON.stringify(data);

//saves as JSON. filename -> something.json
function jsonWrite(fileName){ 
  fs.writeFile(fileName, stringData, function(err) {
             if(err) { console.log(err); 
             } else  { console.log("saved!"); 
           }
          });
}


//saves as js variable. filename ->something.js. objName is name of variable
//both arguments are strings
function saveAsVar(fileName, objName){
  var objectCode = "var " + objName + " = ";
  var stream = fs.createWriteStream(fileName);
  stream.once('open', function(fd) {
              stream.write(objectCode);
              stream.write(stringData);
              stream.write(";");
              stream.end();
      }
    );
}


//save as above, only it pretty prints
function saveAsVarPretty(fileName, objName){
  var objectCode = "var " + objName + " = ";
  var pretty = JSON.stringify(data, null, 2);
  var stream = fs.createWriteStream(fileName);
  stream.once('open', function(fd) {
              stream.write(objectCode);
              stream.write(pretty);
              stream.write(";");
              stream.end();
      }
    );
}

saveAsVarPretty('Permits.js', 'bushwickPermits');


ziggyTools.jsonRePrint()