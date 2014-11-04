var fs = require('fs');
var _ = require('underscore');


//Reads file 
// var geoFile = fs.readFileSync('Permits05_09_withPluto.json');
// //turns file into object
// var data = JSON.parse(geoFile);


// "oldName": "newName"
var newOld = {
  "StreetName": "St",
  "House": "H",
  "OwnerBis": "bis",
  "OwnerAdd": "addOfOwner"
};

var myOptions = {
  "pretty": true,
  "outputName": 'myvariablename'
};

console.log(myOptions.outputName);

geoJsonRename('dobJobs_Sampledata.geojson', 'testReWrite', newOld, myOptions);

function geoJsonRename(filePath, fileName, fieldsMap, options) {

  //filePath ->string, location of goeJSON
  //fileName ->string, name of of file to output
  //fieldsMap -> object, where the Keys are the old names & Values are the newnames
  //options ->options object.
  //  options = {
  //   "outputObj": true or false?,
  //   "outputName": 'string',
  //   "pretty": true or false?
  // } 




  
  (function main() {

    var options = options;
    var objName = options.outputName;
    var parsedData = JSON.parse(fs.readFileSync(filePath));
    var editedData = keepOnlyNewFields(rename(parsedData), fieldsMap);

    if (options.outputName) {

        fileName = fileName + '.js';
        if(options.pretty == true) {

          saveAsVarPretty(editedData, fileName)

        } else {

          saveAsVar(editedData, fileName);

        }


    } else {

      fileName = fileName + '.json';
      jsonWrite(editedData);

    }


  })()




  var parsedData = JSON.parse(fs.readFileSync(filePath));
  // var renamedData = rename(parsedData);
  // var deleted = keepOnlyNewFields(renamedData, fieldsMap);
  // saveAsVarPretty(deleted, 'test.js', 'a77hh');
  saveAsVarPretty(keepOnlyNewFields(rename(parsedData), fieldsMap), fileName, 'objectismyname');


  //ues fieldsMap to rename geoJSON feature's properties. 
  //output: geoJSON
  function rename(geoJson) {
  
    var renamed = geoJson;
    var newFields = _.values(fieldsMap);
    var oldFields = _.keys(fieldsMap);
    for (var i = 0; i < renamed.features.length; i++) {
      for (var p = 0; p < newFields.length; p++) {
          renamed.features[i].properties[newFields[p]] = renamed.features[i].properties[oldFields[p]];
          delete renamed.features[i].properties[oldFields[p]];
      };
      
    };
   return renamed;


  }

  //deletes everything but the new fields
  function keepOnlyNewFields(geoJson, fieldsMap) {
    var newFields = _.values(fieldsMap);

    for (var i = 0; i < geoJson.features.length; i++) {
    geoJson.features[i].properties = _.pick(geoJson.features[i].properties, newFields);
    };

    return geoJson;
  }


  //turns data back into string for file writing 
  // function toString(geoJson) {
  //   return JSON.stringify(geoJson);
  // }

  //saves as JSON. filename -> something.json
  function jsonWrite(data, fileName){ 
    var stringData = JSON.stringify(data);
    fs.writeFile(fileName, stringData, function(err) {
               if(err) { console.log(err); 
               } else  { console.log("saved!"); 
             }
            });
  }


  //saves as js variable. filename ->something.js. objName is name of variable
  //both arguments are strings
  function saveAsVar(data, fileName){
    var stringData = JSON.stringify(data);
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
  function saveAsVarPretty(data, fileName){
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



}