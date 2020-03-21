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
const http = require('http');
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

app.use(express.static('public'));
const dataPath = "./public/json/bezocht.json";

/**
 * Routes Definitions
 */
app
    .use(express.static('public'))
    .get('/home/login', function (req, res) {
        console.log('Login request');
        res.status(200).send('Login from server.');
    })
    
    .on('error', function (error) {
        console.log("Error: \n" + error.message);
        console.log(error.stack);
    })
    .get('/old', function (req, res) {
        res.sendFile(__dirname + "/index.html");
    })

   
    .get('/data', function (req, res) {
        if (dataObj == null || dataObj == undefined) {
            console.log("data not load")
            dataObj = OpenJsonDataFile(dataPath);
        } else {


            res.json(dataObj.Gdata);
        }

    })

    .get('/TotalDist', function (req, res) {

        if (dataObj == null || dataObj == undefined) {
            console.log("data not load")
            dataObj = OpenJsonDataFile(dataPath);
        } else {
            var out = completeTotalDist(dataObj.Gdata.members);
            res.json(out);
        }
    })
    .all('/*', function (req, res) {
        
        res
            .status(200)
            .set({
                'content-type': 'text/html; charset=utf-8'
            })
            .sendfile('public/index.html');
    })


/**
 * Server Activation
 */
http
    .createServer(app).listen(3000)
    .on('error', function (error) {
        console.log("Error: \n" + error.message);
        console.log(error.stack);
    });


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