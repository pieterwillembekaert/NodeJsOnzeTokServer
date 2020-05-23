/**
 * Global var
 */
var dataObj;
var dataCountryG;

var login = {
    email: String,
    password: String,
    actief: Boolean
};
var CorrectLogin = {
    "email": "ksa@ksa.be",
    "password": "ksagroetu"
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
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const formidable = require('formidable');

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
    .use(express.static('public'),
        fileUpload(),
        function (req, res, next) {
            res
                .header("Access-Control-Allow-Origin", "*")
                // Request headers you wish to allow
                .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            // Set to true if you need the website to include cookies in the requests sent
            next();
        }
    )
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
            login.actief = true;
            console.log("ok")
            res.redirect('/home')
        }

    })
    .post('/newdata', bodyParser.json(), (req, res) => {
        //data van pagina
        let newData = req.body;

        //data opslaan naar de tussen var
        let dataGet = dataObj.Gdata;
        let length = dataGet.members.length;
        dataGet.members[length] = newData;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataObj.Sdata = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(dataObj.Gdata);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/changedata', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = dataObj.Gdata;

        //data opslaan naar de tussen var
        let i = DataFromPage.index;
        dataGet.members[i].name = DataFromPage.name;
        dataGet.members[i].country = DataFromPage.country;
        dataGet.members[i].distance = DataFromPage.distance;
        dataGet.members[i].imgScr = DataFromPage.imgScr;
        dataGet.members[i].date = DataFromPage.date;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataObj.Sdata = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(dataObj.Gdata);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/deletdata', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = dataObj.Gdata;

        //open te wissen id
        let i = DataFromPage.index;

        //object wissen en herschikken array
        dataGet.members[i] = null;
        dataGet.members.sort();
        dataGet.members.pop();

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataObj.Sdata = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(dataObj.Gdata);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/logout', bodyParser.json(), (req, res) => {
        login.actief = false;

    })
    .get('/home', function (req, res) {
        console.log("test")
        var a = {
            user: "",
            actief: false
        }
        a.user = login.email;
        a.user = login.actief;
        if (true) {
            res
                .status(200)
                .json(a);
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
        if (login.actief == true) {
            res.sendfile('public/database.html')
        } else {
            res.sendfile('public/login.html')

        }
    })
    .get('/timeline', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .set({
                'content-type': 'text/html; charset=utf-8'
            })

            .sendfile('public/Timeline.html')
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
    .get('/folder', function (req, res) {
        res
            .status(200)
            .set({
                'content-type': 'text/html; charset=utf-8'
            })
            .sendfile('public/static/folder.html');
    })
    .post('/upload', function (req, res) {
        let sampleFile;
        let uploadPath;

        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }

        console.log('req.files >>>', req.files); // eslint-disable-line

        sampleFile = req.files.sampleFile;
        console.log(__dirname)

        uploadPath = __dirname + '/public/upload/' + sampleFile.name;

        sampleFile.mv(uploadPath, function (err) {
            if (err) {
                console.log("error", err)
                return res.status(500).send(err);
            }
            //res.send('File uploaded to ' + uploadPath);
        });
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
    console.log(dataObj)
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