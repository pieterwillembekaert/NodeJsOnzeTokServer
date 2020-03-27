/**
 * Global var
 */
var dataObj;
var LourdesData = {
    Groepen: {},
    weide: {},
    vastProgramma: {},
    keuzeProgramma: {},

    set SdataGroepen(dataSet) {
        this.Groepen = dataSet;
    },
    get GdataGroepen() {
        return this.Groepen;
    }, 
    set SdataWeide(dataSet) {
        this.weide = dataSet;
    },
    get GdataWeide() {
        return this.weide;
    },

    set SdataVastProgramma(dataSet) {
        this.vastProgramma = dataSet;
    },
    get GdataVastProgramma() {
        return this.vastProgramma;
    },

    set SdatakeuzeProgramma(dataSet) {
        this.keuzeProgramma = dataSet;
    },
    get GdatakeuzeProgramma() {
        return this.keuzeProgramma;
    }



};
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
const dataGroepen = "./public/json/Lourdes_Groepen.json";
const dataWeide = "./public/json/Lourdes_Weide.json";
const dataPathVastProgramma = "./public/json/Lourdes_VastProgramma.json";
const dataPathKeuzeProgramma = "./public/json/Lourdes_KeuzeProgramma.json";
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
            login.actief = true;
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
        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
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
    .post('/newdataBondenLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(LourdesData.GdataGroepen)
        let newData = req.body;
        let dataGet = LourdesData.GdataGroepen;
        console.log(dataGet)
        let length = dataGet.bonden.length;
        console.log(length)
        dataGet.bonden[length] = newData;
        for (let i = 0; i < dataGet.bonden.length; i++) {
            dataGet.bonden[i].id = i;
        }
        LourdesData.SdataGroepen = dataGet;
        console.log(LourdesData.GdataGroepen);
        console.log("save data");
        
        var newdata1 = LourdesData.GdataGroepen;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataGroepen, jsonContent)
    })
    .post('/newDataWeideLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(LourdesData.GdataWeide)
        let newData = req.body;
        let dataGet = LourdesData.GdataWeide;
        console.log(dataGet)
        let length = dataGet.weides.length;
        console.log(length)
        dataGet.weides[length] = newData;
        for (let i = 0; i < dataGet.weides.length; i++) {
            dataGet.weides[i].id = i;
        }
        LourdesData.GdataWeide = dataGet;
        console.log(LourdesData.GdataWeide);
        console.log("save data");
        
        var newdata1 = LourdesData.GdataWeide;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataWeide, jsonContent)
    })
    .post('/newDataVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(LourdesData.GdataVastProgramma)
        let newData = req.body;
        let dataGet = LourdesData.GdataVastProgramma;
        console.log(dataGet)
        let length = dataGet.vast_programma.length;
        console.log(length)
        dataGet.vast_programma[length] = newData;
        for (let i = 0; i < dataGet.vast_programma.length; i++) {
            dataGet.vast_programma[i].id = i;
        }
        LourdesData.GdataVastProgramma = dataGet;
        console.log(LourdesData.GdataVastProgramma);
        console.log("save data");
        
        var newdata1 = LourdesData.GdataVastProgramma;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/newDataKeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        console.log(LourdesData.GdatakeuzeProgramma)
        let newData = req.body;
        let dataGet = LourdesData.GdatakeuzeProgramma;
        console.log(dataGet)
        let adataGet=dataGet.keuze_programma;
        console.log(adataGet)
        let length = adataGet.length;
        console.log(length)
        adataGet[length] = newData;
        for (let i = 0; i < adataGet.length; i++) {
            adataGet[i].id = i;
        }
        dataGet.keuze_programma=adataGet;
        LourdesData.GdataKeuzeProgramma = dataGet;
        console.log(LourdesData.GdataKeuzeProgramma);
        console.log("save data");
        
        var newdata1 = LourdesData.GdataKeuzeProgramma;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
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

        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
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
    .post('/changedataBondenLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdataGroepen;
        console.log(dataGet)
        console.log(dataGet.bonden)
        let i = DataFromPage.id;
        console.log(i)
        dataGet.bonden[i].bond = DataFromPage.bond;
        dataGet.bonden[i].weide = DataFromPage.weide;
        dataGet.bonden[i].id = DataFromPage.id;
        dataGet.bonden[i].keuzeprogramma = DataFromPage.keuzeprogramma;
        
        for (let i = 0; i < dataGet.bonden.length; i++) {
            dataGet.bonden[i].id = i;
        }
        LourdesData.SdataGroepen = dataGet;
        console.log(LourdesData.GdataGroepen);
        console.log("save data");
        console.log(LourdesData.bonden)
        var newdata1 = LourdesData.GdataGroepen;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataGroepen, jsonContent)
    })
    .post('/changedataWeidesLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdataWeide;
        let i = DataFromPage.id;
        console.log(i)
        dataGet.weides[i].id = DataFromPage.bond;
        dataGet.weides[i].weide = DataFromPage.weide;
        dataGet.weides[i].NM_2108 = DataFromPage.NM_2108;
        dataGet.weides[i].VM_2208 = DataFromPage.VM_2208;
        dataGet.weides[i].NM_2208 = DataFromPage.NM_2208;
        dataGet.weides[i].VM_2308 = DataFromPage.VM_2308;
        dataGet.weides[i].NM_2308 = DataFromPage.NM_2308;
        dataGet.weides[i].VM_2508 = DataFromPage.VM_2508;
        dataGet.weides[i].NM_2508 = DataFromPage.NM_2508;
        dataGet.weides[i].VM_2608 = DataFromPage.VM_2608;
        dataGet.weides[i].NM_2608 = DataFromPage.NM_2608;
        for (let i = 0; i < dataGet.weides.length; i++) {
            dataGet.weides[i].id = i;
        }
        LourdesData.SdataWeide = dataGet;
        console.log(LourdesData.GdataWeide);
        console.log("save data");
       
        var newdata1 = LourdesData.GdataWeide;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataWeide, jsonContent)
    })
    .post('/changedataVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdataVastProgramma;
        console.log(dataGet)
        let adataGet= dataGet.vast_programma; 
        let i = DataFromPage.id;
        console.log(i)
        adataGet[i].id = DataFromPage.bond;
        adataGet[i].wat = DataFromPage.wat;
        adataGet[i].waar = DataFromPage.waar;
        adataGet[i].duur = DataFromPage.duur;
        adataGet[i].start = DataFromPage.start;
        adataGet[i].stop = DataFromPage.stop;
        adataGet[i].benodigdheden = DataFromPage.benodigdheden;
        adataGet[i].beschrijving = DataFromPage.beschrijving;
        
        for (let i = 0; i < adataGet.length; i++) {
            adataGet[i].id = i;
        }
        dataGet.vast_programma= adataGet;
        LourdesData.SdataVastProgramma = dataGet;
        console.log(LourdesData.SdataVastProgramma);
        console.log("save data");
       
        var newdata1 = LourdesData.GdataVastProgramma;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/changedatakeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdatakeuzeProgramma;
        console.log(dataGet)
        let adataGet= dataGet.keuze_programma; 
        let i = DataFromPage.id;
        console.log(i)
        adataGet[i].id = DataFromPage.bond;
        adataGet[i].wat = DataFromPage.wat;
        adataGet[i].waar = DataFromPage.waar;
        adataGet[i].duur = DataFromPage.duur;
        adataGet[i].start = DataFromPage.start;
        adataGet[i].stop = DataFromPage.stop;
        adataGet[i].benodigdheden = DataFromPage.benodigdheden;
        adataGet[i].beschrijving = DataFromPage.beschrijving;
        
        for (let i = 0; i < adataGet.length; i++) {
            adataGet[i].id = i;
        }
        dataGet.keuze_programma= adataGet;
        LourdesData.SdatakeuzeProgramma = dataGet;
        console.log(LourdesData.SdatakeuzeProgramma);
        console.log("save data");
       
        var newdata1 = LourdesData.GdatakeuzeProgramma;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
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

        for (let i = 0; i < dataGet.members.length; i++) {
            dataGet.members[i].id = i;
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
    .post('/deletdataBondenLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdataGroepen;
        let i = DataFromPage.id;
        console.log(i)
        dataGet.bonden[i] = null;
        dataGet.bonden.sort();
        dataGet.bonden.pop();

        for (let i = 0; i < dataGet.bonden.length; i++) {
            dataGet.bonden[i].id = i;
        }
        LourdesData.SdataGroepen = dataGet;
        console.log("save data");
    
        var newdata1 = LourdesData.GdataGroepen;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataGroepen, jsonContent)
    })
    .post('/deletdataVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdataVastProgramma;
        let i = DataFromPage.id;
        console.log(i)
        dataGet.vast_programma[i] = null;
        dataGet.vast_programma.sort();
        dataGet.vast_programma.pop();

        for (let i = 0; i < dataGet.vast_programma.length; i++) {
            dataGet.vast_programma[i].id = i;
        }
        LourdesData.SdataVastProgramma = dataGet;
        console.log("save data");
    
        var newdata1 = LourdesData.GdataVastProgramma;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/deletdataKeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdatakeuzeProgramma;
        console.log(dataGet)
        let i = DataFromPage.id;
        console.log(i)
        dataGet.keuze_programma[i] = null;
        dataGet.keuze_programma.sort();
        dataGet.keuze_programma.pop();

        for (let i = 0; i < dataGet.keuze_programma.length; i++) {
            dataGet.keuze_programma[i].id = i;
        }
        LourdesData.SdataKeuzeProgramma = dataGet;
        console.log("save data");
    
        var newdata1 = LourdesData.GdatakeuzeProgramma;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
    })
    .post('/deletdataWeideLourdes', bodyParser.json(), (req, res) => {
        console.log(req.body)
        let DataFromPage = req.body;
        let dataGet = LourdesData.GdataWeide;
        console.log(dataGet)
        console.log(dataGet.weides)
        let i = DataFromPage.id;
        console.log(i)
        dataGet.weides[i] = null;
        dataGet.weides.sort();
        dataGet.weides.pop();

        for (let i = 0; i < dataGet.weides.length; i++) {
            dataGet.weides[i].id = i;
        }
        LourdesData.SdataWeide = dataGet;
        console.log("save data");
    
        var newdata1 = LourdesData.GdataWeide;
        var jsonContent = JSON.stringify(newdata1);
        console.log(jsonContent);
        SaveDataToFile(dataWeide, jsonContent)
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
    .get('/LourdesDatabase', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .set({
                'content-type': 'text/html; charset=utf-8'
            })

            .sendfile('public/databaseLourdes.html')
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
    .get('/downloadBondenLourdes', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataGroepen)

    })
    .get('/downloadWeidesLourdes', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataWeide)

    })
    .get('/downloadVastProgrammaLourdes', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataPathVastProgramma)

    })
    .get('/downloadKeuzeProgrammaLourdes', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataPathKeuzeProgramma)

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
    .get('/dataLourdes', function (req, res) {

    
            fs.readFile(dataGroepen, (err, data) => {
                if (err) {
                    throw err;
                }
                LourdesData.SdataGroepen=JSON.parse(data);
               
               
            });

            fs.readFile(dataWeide, (err, data) => {
                if (err) {
                    throw err;
                }
                LourdesData.SdataWeide=JSON.parse(data);
            });

            fs.readFile(dataPathVastProgramma, (err, data) => {
                if (err) {
                    throw err;
                }
                LourdesData.SdataVastProgramma=JSON.parse(data);
            });
            fs.readFile(dataPathKeuzeProgramma, (err, data) => {
                if (err) {
                    throw err;
                }
                LourdesData.SdatakeuzeProgramma=JSON.parse(data);
            });

            console.log(LourdesData)
            res.json(LourdesData);
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