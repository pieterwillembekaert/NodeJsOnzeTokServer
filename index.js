/**
 * Global var
 */
var dataObj;
var dataCountryG; 
var login = {
    email: String,
    password: String
};
var CorrectLogin = {
    "email": "ksa@mail.com",
    "password": "1"
};
/**
 * Init fuction 
 */


/**
 * Required External Modules
 */
const http = require('http');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')


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
const dataCountry = "./public/json/country.json";
/**
 * Routes Definitions
 */
app
    .use(express.static('public'))
    .get('/home/login', function (req, res) {
        console.log('Login request');
        res.status(200).send('Login from server.');
    })
    .get('/Login', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .set({
                'content-type': 'text/html; charset=utf-8'
            })
            .sendfile('public/login.html');
    })
    .post('/Login/requist', bodyParser.json(), (req, res) => {
        console.log(req.body)
        login.email = req.body.email;
        login.password = req.body.password;

        if (login.email == CorrectLogin.email && login.password == CorrectLogin.password) {
            console.log("ok")
            res.redirect('/home')
        }

    })
    .post('/newdata', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(dataObj.Gdata)
        let newData = req.body;
        let dataGet = dataObj.Gdata;
        let length = dataGet.members.length;
        console.log(length)
        dataGet.members[length] = newData;
        for (let i = 0;  i < dataGet.members.length; i++) {
            dataGet.members[i].id=i; 
        }
        dataObj.Sdata = dataGet;
        console.log(dataObj.Gdata);
        console.log("save data");
        console.log(dataObj.members)
        var newdata1 = dataObj.Gdata;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/changedata', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(dataObj.Gdata)
        let DataFromPage = req.body;
        let dataGet = dataObj.Gdata;
        let i = DataFromPage.index;
        console.log(i)
        dataGet.members[i].name = DataFromPage.name;
        dataGet.members[i].country = DataFromPage.country;
        dataGet.members[i].distance = DataFromPage.distance;
        dataGet.members[i].imgScr = DataFromPage.imgScr;
        dataGet.members[i].date = DataFromPage.date;

        for (let i = 0;  i < dataGet.members.length; i++) {
            dataGet.members[i].id=i; 
        }
        dataObj.Sdata = dataGet;
        console.log(dataObj.Gdata);
        console.log("save data");
        console.log(dataObj.members)
        var newdata1 = dataObj.Gdata;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/deletdata', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(dataObj.Gdata)
        let DataFromPage = req.body;
        let dataGet = dataObj.Gdata;
        let i = DataFromPage.index;
        console.log(i)
        dataGet.members[i] = null;
        dataGet.members.sort();
        dataGet.members.pop();

        for (let i = 0;  i < dataGet.members.length; i++) {
            dataGet.members[i].id=i; 
        }
        dataObj.Sdata = dataGet;
        console.log(dataObj.Gdata);
        console.log("save data");
        console.log(dataObj.members)
        var newdata1 = dataObj.Gdata;
        console.log(newdata1)
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPath, jsonContent)
    })
    .get('/home', function (req, res) {
        console.log("test")
        if (true) {
            res
                .status(200)
                .set({
                    'content-type': 'text/html; charset=utf-8'
                })
                .sendfile('public/database.html')
        } else {
            res.send('Please login to view this page!');
        }
        res.end();
    })
    .get('/database', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .set({
                'content-type': 'text/html; charset=utf-8'
            })
            .sendfile('public/database.html')

    })
    .get('/download', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataPath)

    })
    .get('/county', function (req, res) {
        if (dataCountryG == null || dataCountryG == undefined) {
            console.log("data not load dataCountryG")
            dataCountryG = OpenJsonDataFile(dataCountry);
        } else {
            console.log(dataCountryG.Gdata)
            res.json(dataCountryG.Gdata);
        }
    })



    .on('error', function (error) {
        console.log("Error: \n" + error.message);
        console.log(error.stack);
    })

    .get('/data', function (req, res) {
        if (dataObj == null || dataObj == undefined) {
            console.log("data not load")
            dataObj = OpenJsonDataFile(dataPath);
        } else {
            console.log(dataObj.Gdata)
            res.json(dataObj.Gdata);
        }

    })

    .get('/TotalDist', function (req, res) {

        if (dataObj == null || dataObj == undefined) {
            console.log("data not load")
            dataObj = OpenJsonDataFile(dataPath);
        } else {
            let out = completeTotalDist(dataObj.Gdata.members);
            res.json(out);
        }
    })
    .all('/*', function (req, res) {
        if (dataObj == null || dataObj == undefined) {
            console.log("data not load")
            dataObj = OpenJsonDataFile(dataPath);
        }

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
    .createServer(app).listen(port)
    .on('error', function (error) {
        console.log("Error: \n" + error.message);
        console.log(error.stack);
    });


/**
 * Functions
 */
function SaveDataToFile(dataPath, newdata) {
    //var jsonContent = JSON.stringify(newdata);
    //console.log(jsonContent);
    fs.writeFile(dataPath, newdata, function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
}

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

function OpenJsonDataFileCounrty(dataPath) {
    var dataOut = {
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
        dataOut.Sdata = JSON.parse(data);
        

    });
    
    return dataOut;
    
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