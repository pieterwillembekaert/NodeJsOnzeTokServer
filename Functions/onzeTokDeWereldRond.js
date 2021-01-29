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

