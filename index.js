/**
 * Global var
 */
function convertDateFromPage(inputString) {
    console.log(inputString)
    let str = inputString;
    let res = str.split("-");
    let res1 = res[2].split("T");

    let year = res[0];
    let month = res[1];
    let day = res1[0];

    return day + "-" + month + "-" + year;
}

function convertDateFromPageYear(inputString) {
    let str = inputString;
    let res = str.split("-");
    let res1 = res[2].split("T");

    let year = res[0];
    let month = res[1];
    let day = res1[0];

    return year;
}

var dataCountryTranslation = {
    data: {},

    set Sdata(dataSet) {
        this.data = dataSet;
    },
    get Gdata() {
        return this.data;
    }
};

var dataCountry = {
    data: {},

    set Sdata(dataSet) {
        this.data = dataSet;
    },
    get Gdata() {
        return this.data;
    }
};

var dataObjVisiters = {
    data: {},

    set Sdata(dataSet) {
        this.data = dataSet;
    },
    get Gdata() {
        return this.data;
    }
};

var login = {
    email: String,
    password: String,
    actief: Boolean
};
var CorrectLogin = {
    "email": "ksa@ksa.be",
    "password": "ksagroetu"
};

var CorrectMasterLogin = {
    "email": "pwb@ksa.be",
    "password": "123456"
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
const dataPath = "./public/static/json/bezocht.json";
const dataPathCountry = "./public/static/json/country.json";
const dataPathCountrytranslation = "./public/static/json/countryTranslation.json";
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
        } else if (login.email == CorrectMasterLogin.email && login.password == CorrectMasterLogin.password) {
            login.actief = true;
            console.log("ok")
            res.redirect('/home')
        }

    })
    .post('/saveToDB', bodyParser.json(), (req, res) => {
        //data van pagina
        let newDataToSave = req.body;

        if (!newDataToSave) {
            res.sendStatus(404);
            return;
        }

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(newDataToSave);
        SaveDataToFile(dataPath, jsonContent);
        res.sendStatus(200);
    })


    .post('/newdata', bodyParser.json(), (req, res) => {
        //data van pagina
        let newData = req.body;

        let listCountrysTranslation = dataCountryTranslation.Gdata;
        let listCountrys = dataCountry.Gdata;

        //land vertalen nl -> en
        for (let i = 0; i < listCountrysTranslation.countrys.length; i++) {
            if (newData.countryTanslation == listCountrysTranslation.countrys[i]) {
                newData.country = listCountrys.countrys[i];
            }
        }

        newData.dateConvert = convertDateFromPage(newData.date);
        newData.year = convertDateFromPageYear(newData.date)

        //data opslaan naar de tussen var
        let dataGet = dataObjVisiters.Gdata;
        let length = dataGet.members.length;
        dataGet.members[length] = newData;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataObjVisiters.Sdata = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(dataObjVisiters.Gdata);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/changedata', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = dataObjVisiters.Gdata;
        let listCountrysTranslation = dataCountryTranslation.Gdata;
        let listCountrys = dataCountry.Gdata;

        var country;

        //land vertalen nl -> en
        for (let i = 0; i < listCountrysTranslation.countrys.length; i++) {
            if (DataFromPage.countryTanslation == listCountrysTranslation.countrys[i]) {
                country = listCountrys.countrys[i];
            }
        }

        var convertDate = convertDateFromPage(DataFromPage.date);
        var convertYear = convertDateFromPageYear(DataFromPage.date);

        //data opslaan naar de tussen var
        let i = DataFromPage.index;
        dataGet.members[i].name = DataFromPage.name;
        dataGet.members[i].country = country;
        dataGet.members[i].countryTanslation = DataFromPage.countryTanslation;
        dataGet.members[i].date = DataFromPage.date;
        dataGet.members[i].dateConvert = convertDate;
        dataGet.members[i].distance = DataFromPage.distance;
        dataGet.members[i].imgScr = DataFromPage.imgScr;
        dataGet.members[i].year = convertYear;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataObjVisiters.Sdata = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(dataObjVisiters.Gdata);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/deletdata', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = dataObjVisiters.Gdata;

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
        dataObjVisiters.Sdata = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(dataObjVisiters.Gdata);
        SaveDataToFile(dataPath, jsonContent)
    })
    .post('/logout', bodyParser.json(), (req, res) => {
        login.actief = false;

    })
    .get('/home', function (req, res) {
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
    .get('/download', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataPath)

    })
    .get('/country', function (req, res) {
        fs.readFile(dataPathCountry, (err, data) => {
            if (err) {
                throw err;
            }
            dataCountry.Sdata = JSON.parse(data);
            res.json(dataCountry.Gdata);
        });

    })
    .get('/countryTranslation', function (req, res) {
        fs.readFile(dataPathCountrytranslation, (err, data) => {
            if (err) {
                throw err;
            }
            dataCountryTranslation.Sdata = JSON.parse(data);
            res.json(dataCountryTranslation.Gdata);
        });


    })
    .on('error', function (error) {
        console.log("Error: \n" + error.message);
        console.log(error.stack);
    })
    .get('/data', function (req, res) {
        fs.readFile(dataPath, (err, data) => {
            if (err) {
                throw err;
            }
            dataObjVisiters.Sdata = JSON.parse(data);
            res.json(dataObjVisiters.Gdata);
        });
    })
    .get('/TotalDist', function (req, res) {
        var out;
        if (dataObjVisiters.Gdata.members == null || undefined) {
            fs.readFile(dataPath, (err, data) => {
                if (err) {
                    throw err;
                }
                dataObjVisiters.Sdata = JSON.parse(data);
                out = completeTotalDistYear(dataObjVisiters.Gdata.members, 0);
                res.json(out);
            });
        } else {

            out = completeTotalDistYear(dataObjVisiters.Gdata.members, 0);
            res.json(out);
        }
    })
    .get('/TotalDist/:year', function (req, res) {
        var year = Number(req.params.year);
        var out;
        if (dataObjVisiters.Gdata.members == null || undefined) {
            fs.readFile(dataPath, (err, data) => {
                if (err) throw err;

                dataObjVisiters.Sdata = JSON.parse(data);
                out = completeTotalDistYear(dataObjVisiters.Gdata.members, year)
                res.json(out);
            });
        } else {
            out = completeTotalDistYear(dataObjVisiters.Gdata.members, year)
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
    .get('/downloadSjabloon', function (req, res) {

        res
            .status(200)
            .sendfile('public/download/tok.pdf');

    })
    .all('/*', function (req, res) {
        if (dataObjVisiters == null || undefined) {
            fs.readFile(dataPath, (err, data) => {
                if (err) {
                    throw err;
                }
                dataObjVisiters.Sdata = JSON.parse(data);
                res.json(dataObjVisiters.Gdata);
            });
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
    //console.log(test.lang);

    //test.lang = "nl"
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
        //console.log(dataObj.data)
        //console.log(dataObj.Gdata)
        return dataObj.Gdata;
    });
    //console.log(dataObj)   
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

    if (inputdata == null || undefined) {
        console.log("completeTotalDist: error inputdata")
        return
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

//Totale afstand 
function completeTotalDistYear(inputdata, inputYear) {

    var totaal = 0;
    var out = {
        z: 0,
        z1: 0,
        z2: 0,
        z3: 0,
        z4: 0,
        z5: 0,
        z6: 0,
        z7: 0,
        z8: 0,
        z9: 0,
        z10: 0
    }

    if (inputdata == null || undefined) {
        console.log("completeTotalDist: error inputdata")
        return
    }

    if (inputYear == null || undefined) {
        console.log("completeTotalDist: error inputdata")
        return
    }

    if (inputYear == 0) {
        for (let i = 0; i < inputdata.length; i++) {
            totaal = totaal + inputdata[i].distance;
        }

    } else {
        for (let i = 0; i < inputdata.length; i++) {
            if (inputdata[i].year == inputYear) {
                totaal = totaal + inputdata[i].distance;
            }
        }
    }



    var x = totaal;
    out.z = Math.round(x % 10);
    out.z1 = Math.round((x % 100) / 10 - (out.z / 10));
    out.z2 = Math.round(((x % 1000) / 100) - (out.z1 / 10));
    out.z3 = Math.round(((x % 10000) / 1000) - (out.z2 / 10 + (out.z1 / 100)));
    out.z4 = Math.round(((x % 100000) / 10000) - (out.z3 / 10 + out.z2 / 100 + out.z1 / 1000));
    out.z5 = Math.round(((x % 1000000) / 100000) - (out.z4 / 10 + out.z3 / 100 + out.z2 / 1000 + out.z1 / 10000));
    out.z6 = Math.round(((x % 10000000) / 1000000) - (out.z5 / 10 + out.z4 / 100 + out.z3 / 1000 + out.z2 / 10000 + out.z1 / 100000));
    out.z7 = Math.round(((x % 100000000) / 10000000) - (out.z6 / 10 + out.z5 / 100 + out.z4 / 1000 + out.z3 / 10000 + out.z2 / 100000 + out.z1 / 1000000));
    out.z8 = Math.round(((x % 1000000000) / 100000000) - (out.z7 / 10 + out.z6 / 100 + out.z5 / 1000 + out.z4 / 10000 + out.z3 / 100000 + out.z2 / 1000000 + out.z1 / 10000000));
    out.z9 = Math.round(((x % 100000000000) / 1000000000) - (out.z8 / 10 + out.z7 / 100 + out.z6 / 1000 + out.z5 / 10000 + out.z4 / 100000 + out.z3 / 1000000 + out.z2 / 10000000 + out.z1 / 100000000));
    out.z10 = Math.round(((x % 1000000000000) / 100000000000) - (out.z9 / 10 + out.z8 / 100 + out.z7 / 1000 + out.z6 / 10000 + out.z5 / 100000 + out.z4 / 1000000 + out.z3 / 10000000 + out.z2 / 100000000 + out.z1 / 1000000000));

    return out;
}