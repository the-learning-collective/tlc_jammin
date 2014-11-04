var fs = require('fs');
var _ = require('underscore');

(function () {

    var filePath = 'dobJobs_Sampledata.geojson';
    var fileName = 'test.js';
    var objectName = testObject;

    //map object
    var oldNewNames = {
        "Borough": "whereILive", 
        "House": "myHouse"
    };

    //reads file
    var data = JSON.parse(fs.readFileSync(filePath));

    saveAsPrettyVariable(keepOnlyNewFields(rename(data)), 'test1.js', 'testingtesting');

    function rename(geoJson) {

        var renamed = geoJson;
        var newFields = _.values(oldNewNames);
        var oldFields = _.keys(oldNewNames);
        
        for (var i = 0; i < renamed.features.length; i++) {
          for (var p = 0; p < newFields.length; p++) {
              renamed.features[i].properties[newFields[p]] = renamed.features[i].properties[oldFields[p]];
                // this doesn't work properly. it's not really necessary, but still, i don't know why 
                // renamed.features[i].properties = _.omit(renamed.features[i].properties, oldFields);
          };
        };
        return renamed;
    }

    function keepOnlyNewFields(geoJson) {
        
        var toBeReduced = geoJson;
        var newFields = _.values(oldNewNames);

         for (var i = 0; i < toBeReduced.features.length; i++) {
            toBeReduced.features[i].properties = _.pick(toBeReduced.features[i].properties, newFields);  
        };

        return toBeReduced;
    }

    function jsonWrite(geoJson, fileName){
        var stringData = JSON.stringify(geoJson);
        fs.writeFile(fileName, stringData, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("saved!");
            }
        });
    }

    function saveAsVariable(geoJson, fileName, objName) {
        var stringData = JSON.stringify(geoJson);
        var objectCode = "var " + objName + " = ";
        var stream = fs.createWriteStream(fileName);
        stream.once('open', function(fd) {
            stream.write(objectCode);
            stream.write(stringData);
            stream.write(";");
            stream.end();
        });
    }

    function saveAsPrettyVariable(geoJson, fileName, objName) {
        var stringData = JSON.stringify(geoJson, null, 2);
        var objectCode = "var " + objName + " = ";
        var stream = fs.createWriteStream(fileName);
        stream.once('open', function(fd) {
            stream.write(objectCode);
            stream.write(stringData);
            stream.write(";");
            stream.end();
        });
        console.log('saved');
    }

})();