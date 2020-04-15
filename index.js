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
const dataPathGroepen = "./public/json/Lourdes_Groepen.json";
const dataPathWeide = "./public/json/Lourdes_Weide.json";
const dataPathVastProgramma = "./public/json/Lourdes_VastProgramma.json";
const dataPathKeuzeProgramma = "./public/json/Lourdes_KeuzeProgramma.json";
const dataPathExportFileApp = "./public/json/Lourdes_ExportFileApp.json";
/**
 * Routes Definitions
 */
app
    .use(express.static('public'),
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
    .post('/newdataBondenLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newData = req.body;

        //data opslaan naar de tussen var
        let dataGet = LourdesData.GdataGroepen;
        let length = dataGet.bonden.length;
        dataGet.bonden[length] = newData;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.bonden.length; i++) {
            dataGet.bonden[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataGroepen = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataGroepen);
        SaveDataToFile(dataPathGroepen, jsonContent)
    })
    .post('/saveToDBBondenLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newDataDataGroepen = req.body.dataGroepen;
        let newDatalastUpdate = req.body.lastUpdate;
        console.log(newDataDataGroepen)

        var objnewdata = {
            lastUpdate: {},
            bonden: []
        }

        objnewdata.bonden = newDataDataGroepen;
        objnewdata.lastUpdate = newDatalastUpdate;
        //data terug opslaan naar de globale var
        LourdesData.SdataGroepen = objnewdata;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataGroepen);
        SaveDataToFile(dataPathGroepen, jsonContent)
    })
    .post('/saveToDBWeidesLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newDataDataGroepen = req.body.dataWeide;
        let newDatalastUpdate = req.body.lastUpdate;

        var objnewdata = {
            lastUpdate: {},
            weides: []
        }

        objnewdata.weides = newDataDataGroepen;
        objnewdata.lastUpdate = newDatalastUpdate;
        //data terug opslaan naar de globale var
        LourdesData.SdataWeide = objnewdata;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataWeide);
        SaveDataToFile(dataPathWeide, jsonContent)
    })
    .post('/saveToDBVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newDatavast_programma = req.body.dataVastprogramma;
        let newDatalastUpdate = req.body.lastUpdate;

        var objnewdata = {
            lastUpdate: {},
            vast_programma: []
        }

        objnewdata.vast_programma = newDatavast_programma;
        objnewdata.lastUpdate = newDatalastUpdate;

        //data terug opslaan naar de globale var
        LourdesData.SdataVastProgramma = objnewdata;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataVastProgramma);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/saveToDBKeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newDatakeuze_programma = req.body.dataKeuzeprogramma;
        let newDatalastUpdate = req.body.lastUpdate;

        console.log("hier")
        console.log(newDatakeuze_programma)

        var objnewdata = {
            lastUpdate: {},
            keuze_programma: []
        }

        objnewdata.keuze_programma = newDatakeuze_programma
        objnewdata.lastUpdate = newDatalastUpdate;
        //data terug opslaan naar de globale var
        LourdesData.SdatakeuzeProgramma = objnewdata;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdatakeuzeProgramma);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
    })
    .post('/newDataWeideLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newData = req.body;

        //data opslaan naar de tussen var
        let dataGet = LourdesData.GdataWeide;

        //data opslaan naar de tussen var
        let length = dataGet.weides.length;
        dataGet.weides[length] = newData;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.weides.length; i++) {
            dataGet.weides[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.GdataWeide = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataWeide);
        SaveDataToFile(dataPathWeide, jsonContent)
    })
    .post('/newDataVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newData = req.body;

        //data opslaan naar de tussen var
        let dataGet = LourdesData.GdataVastProgramma;

        //data opslaan naar de tussen var
        let length = dataGet.vast_programma.length;
        dataGet.vast_programma[length] = newData;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.vast_programma.length; i++) {
            dataGet.vast_programma[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.GdataVastProgramma = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataVastProgramma);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/newDataKeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let newData = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdatakeuzeProgramma;

        //data opslaan naar de tussen var
        let adataGet = dataGet.keuze_programma;
        let length = adataGet.length;
        adataGet[length] = newData;

        //id opnieuw bepalen
        for (let i = 0; i < adataGet.length; i++) {
            adataGet[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataGet.keuze_programma = adataGet;
        LourdesData.GdataKeuzeProgramma = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataKeuzeProgramma);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
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
    .post('/changedataBondenLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdataGroepen;

        //data opslaan naar de tussen var
        let i = DataFromPage.id;
        dataGet.bonden[i].bond = DataFromPage.bond;
        dataGet.bonden[i].weide = DataFromPage.weide;
        dataGet.bonden[i].id = DataFromPage.id;
        dataGet.bonden[i].keuzeprogramma = DataFromPage.keuzeprogramma;
        dataGet.bonden[i].vertrekplaats = DataFromPage.vertrekplaats;

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.bonden.length; i++) {
            dataGet.bonden[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataGroepen = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataGroepen);
        SaveDataToFile(dataPathGroepen, jsonContent)
    })
    .post('/changedataWeidesLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdataWeide;

        //data opslaan naar de tussen var
        let i = DataFromPage.id;
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

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.weides.length; i++) {
            dataGet.weides[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataWeide = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataWeide);
        SaveDataToFile(dataPathWeide, jsonContent)
    })
    .post('/changedataVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdataVastProgramma;
        let adataGet = dataGet.vast_programma;

        //data opslaan naar de tussen var
        let i = DataFromPage.id;
        adataGet[i].id = DataFromPage.bond;
        adataGet[i].wat = DataFromPage.wat;
        adataGet[i].waar = DataFromPage.waar;
        adataGet[i].duur = DataFromPage.duur;
        adataGet[i].start = DataFromPage.start;
        adataGet[i].stop = DataFromPage.stop;
        adataGet[i].benodigdheden = DataFromPage.benodigdheden;
        adataGet[i].beschrijving = DataFromPage.beschrijving;

        //id opnieuw bepalen
        for (let i = 0; i < adataGet.length; i++) {
            adataGet[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataGet.vast_programma = adataGet;
        LourdesData.SdataVastProgramma = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataVastProgramma);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/changedatakeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdatakeuzeProgramma;
        let adataGet = dataGet.keuze_programma;

        //data opslaan naar de tussen var
        let i = DataFromPage.id;
        adataGet[i].id = DataFromPage.bond;
        adataGet[i].wat = DataFromPage.wat;
        adataGet[i].waar = DataFromPage.waar;
        adataGet[i].duur = DataFromPage.duur;
        adataGet[i].start = DataFromPage.start;
        adataGet[i].stop = DataFromPage.stop;
        adataGet[i].benodigdheden = DataFromPage.benodigdheden;
        adataGet[i].beschrijving = DataFromPage.beschrijving;

        //id opnieuw bepalen
        for (let i = 0; i < adataGet.length; i++) {
            adataGet[i].id = i;
        }

        //data terug opslaan naar de globale var
        dataGet.keuze_programma = adataGet;
        LourdesData.SdatakeuzeProgramma = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdatakeuzeProgramma);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
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
    .post('/deletdataBondenLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdataGroepen;

        //open te wissen id
        let i = DataFromPage.id;

        //object wissen en herschikken array
        dataGet.bonden[i] = null;
        dataGet.bonden.sort();
        dataGet.bonden.pop();

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.bonden.length; i++) {
            dataGet.bonden[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataGroepen = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataGroepen);
        SaveDataToFile(dataPathGroepen, jsonContent)
    })
    .post('/deletdataVastProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdataVastProgramma;

        //open te wissen id
        let i = DataFromPage.id;

        //object wissen en herschikken array
        dataGet.vast_programma[i] = null;
        dataGet.vast_programma.sort();
        dataGet.vast_programma.pop();

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.vast_programma.length; i++) {
            dataGet.vast_programma[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataVastProgramma = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataVastProgramma);
        SaveDataToFile(dataPathVastProgramma, jsonContent)
    })
    .post('/deletdataKeuzeProgrammaLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdatakeuzeProgramma;

        //open te wissen id
        let i = DataFromPage.id;

        //object wissen en herschikken array
        dataGet.keuze_programma[i] = null;
        dataGet.keuze_programma.sort();
        dataGet.keuze_programma.pop();
        //id opnieuw bepalen
        for (let i = 0; i < dataGet.keuze_programma.length; i++) {
            dataGet.keuze_programma[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataKeuzeProgramma = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdatakeuzeProgramma);
        SaveDataToFile(dataPathKeuzeProgramma, jsonContent)
    })
    .post('/deletdataWeideLourdes', bodyParser.json(), (req, res) => {
        //data van pagina
        let DataFromPage = req.body;

        //reeds opgeslagen data openen 
        let dataGet = LourdesData.GdataWeide;

        //open te wissen id
        let i = DataFromPage.id;

        //object wissen en herschikken array
        dataGet.weides[i] = null;
        dataGet.weides.sort();
        dataGet.weides.pop();

        //id opnieuw bepalen
        for (let i = 0; i < dataGet.weides.length; i++) {
            dataGet.weides[i].id = i;
        }

        //data terug opslaan naar de globale var
        LourdesData.SdataWeide = dataGet;

        //data klaarmaken om te bewaren
        let jsonContent = JSON.stringify(LourdesData.GdataWeide);
        SaveDataToFile(dataPathWeide, jsonContent)
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
            .download(dataPathGroepen)

    })
    .get('/downloadWeidesLourdes', bodyParser.json(), function (req, res) {

        res
            .status(200)
            .download(dataPathWeide)

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
    .get('/LourdesDBCreateExportFile', function (req, res) {
        var newExportData = {
            Groepen: {},
            weide: {},
            vastProgramma: {},
            keuzeProgramma: {},
        }

        newExportData.Groepen = LourdesData.GdataGroepen;
        newExportData.weide = LourdesData.GdataWeide;
        newExportData.vastProgramma = LourdesData.GdataVastProgramma;
        newExportData.keuzeProgramma = LourdesData.GdatakeuzeProgramma;

        console.log(newExportData)
        let jsonContent = JSON.stringify(newExportData);
        console.log(jsonContent)



        fs.writeFile(dataPathExportFileApp, jsonContent, function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                res.send("An error occured while writing JSON Object to File.")
                return console.log(err);
            }
            res.send("JSON file has been saved.")
            console.log("JSON file has been saved.");
        });


    })
    .get('/dataLourdes', function (req, res) {


        fs.readFile(dataPathGroepen, (err, data) => {
            if (err) {
                throw err;
            }
            LourdesData.SdataGroepen = JSON.parse(data);


        });

        fs.readFile(dataPathWeide, (err, data) => {
            if (err) {
                throw err;
            }
            LourdesData.SdataWeide = JSON.parse(data);
        });

        fs.readFile(dataPathVastProgramma, (err, data) => {
            if (err) {
                throw err;
            }
            LourdesData.SdataVastProgramma = JSON.parse(data);
        });
        fs.readFile(dataPathKeuzeProgramma, (err, data) => {
            if (err) {
                throw err;
            }
            LourdesData.SdatakeuzeProgramma = JSON.parse(data);
        });

        console.log(LourdesData)
        res.json(LourdesData);
    })

    .get('/dataLourdesAPP', function (req, res) {


        fs.readFile(dataPathExportFileApp, (err, data) => {
            if (err) {
                console.log("Mislukt:")
                throw err;
                

            }
            console.log("Gelukt"); 
            res.json(JSON.parse(data));

        });
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