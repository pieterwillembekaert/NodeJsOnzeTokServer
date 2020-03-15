/**
 * Global var
 */
var dataObj;

/**
 * Init fuction 
 */


/**
 * Required External Modules
 */
const express = require('express');
const fs = require('fs');


/**
 * App Variables
 */

var app = express();
const port = process.env.PORT || 3000;

/**
 *  App Configuration
 */

app.use(express.static(__dirname + '/public'));
const dataPath = "./public/json/bezocht.json";

/**
 * Routes Definitions
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname + "/public/views/rich_ui.html");
});

app.get('/data', function (req, res) {

    if (dataObj == null || dataObj == undefined) {
        console.log("fault")
        dataObj = OpenJsonDataFile(dataPath);
    } else {


        res.json(dataObj.Gdata);
    }

});

app.get('/TotalDist', function (req, res) {

    if (dataObj == null || dataObj == undefined) {
        console.log("fault")
        dataObj = OpenJsonDataFile(dataPath);
    } else {
        var out = completeTotalDist(dataObj.Gdata.members);
        res.json(out);
    }
});


/**
 * Server Activation
 */
app.listen(port, () => console.log("Example app listening on port!"));


/**
 * Functions
 */


//Open json file 
function OpenJsonDataFile(dataPath) {
    var dataObj = {
        data: {},

        set Sdata(dataSet) {
            this.data = dataSet;
        },
        get Gdata() {
            return this.data;
        }



    };
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            throw err;
        }
        dataObj.Sdata = JSON.parse(data);


    });

    return dataObj;
}

//Totale afstand 
function completeTotalDist(inputdata) {
    var totaal = 0;
    var out = {
        z: 0,
        z1: 0,
        z2: 0,
        z3: 0,
        z4: 0,
        z5: 0
    }

    for (i = 0; i < inputdata.length; i++) {
        totaal = totaal + inputdata[i].distance;
    }

    var x = totaal;
    out.z = Math.round(x % 10);
    out.z1 = Math.round((x % 100) / 10 - (out.z / 10));
    out.z2 = Math.round(((x % 1000) / 100) - (out.z1 / 10));
    out.z3 = Math.round(((x % 10000) / 1000) - (out.z2 / 10 + (out.z1 / 100)));
    out.z4 = Math.round(((x % 100000) / 10000) - (out.z3 / 10 + out.z2 / 100 + out.z1 / 1000));
    out.z5 = Math.round(((x % 1000000) / 100000) - (out.z4 / 10 + out.z3 / 100 + out.z2 / 1000 + out.z1 / 10000));

    return out;
}