//show json in table
localStorage.i;

var DataFromJs = {
    data: {},
    aAllCountrys: [],
    vCountryClick: "",

    set Sdata(dataSet) {
        this.data = dataSet;
    },
    get Gdata() {
        return this.data;
    },

    set SaAllCountrys(aAllCountrysSet) {
        this.aAllCountrys = aAllCountrysSet;
    },
    get GaAllCountrys() {
        return this.aAllCountrys;
    },
    set SvCountryClick(INvCountryClick) {
        this.vCountryClick = INvCountryClick;
    },
    get GvCountryClick() {
        return this.vCountryClick;
    }
};






function DataIn() {
    var state;
    var jqxhr = $.getJSON("/static/json/bezocht.json", function (json) {
            // console.log("success");
        })
        .done(function () {
            //console.log("second success");
            state = "second success";
        })
        .fail(function () {
            // console.log("error");
            state = "error";

        })
        .always(function (json) {
            console.log("complete");
            state = "complete";
            var dataIN = json.members;
            DataFromJs.Sdata = dataIN;
            completeTotalDist(DataFromJs,state)
        });
}




function completeTotalDist(inputdata, status) {
    if (status === "complete") {
        var totaal = 0;

        for (i = 0; i < inputdata.length; i++) {
            totaal = totaal + inputdata[i].distance;
        }
        var x = totaal;
        var z = Math.round(x % 10);
        var z1 = Math.round((x % 100) / 10 - (z / 10));
        var z2 = Math.round(((x % 1000) / 100) - (z1 / 10));
        var z3 = Math.round(((x % 10000) / 1000) - (z2 / 10 + (z1 / 100)));
        var z4 = Math.round(((x % 100000) / 10000) - (z3 / 10 + z2 / 100 + z1 / 1000));
        var z5 = Math.round(((x % 1000000) / 100000) - (z4 / 10 + z3 / 100 + z2 / 1000 + z1 / 10000));
        document.getElementById("km1").innerHTML = z;
        document.getElementById("km10").innerHTML = z1;
        document.getElementById("km100").innerHTML = z2;
        document.getElementById("km1000").innerHTML = z3;
        document.getElementById("km10000").innerHTML = z4;
        document.getElementById("km100000").innerHTML = z5;

    }
}








var main = function () {


    DataFromJs.SaAllCountrys = country;

    DataIn();


}