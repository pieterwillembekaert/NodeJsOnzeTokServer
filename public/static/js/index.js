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

function closePBdata() {
    var Prikbord = document.getElementsByClassName("grid-item-map-data");
    Prikbord[0].style.visibility = "hidden";


}

function plus() {
    var i1 = sessionStorage.getItem('i');
    var vLand = DataFromJs.Gdata[i1].country;
    i1++;
    sessionStorage.setItem('i', i1);
    ShowDataInTable(DataFromJs.Gdata);
    var i2 = sessionStorage.getItem('i');
    showCountryFromTableToMap(DataFromJs.Gdata[i2].country, DataFromJs.GaAllCountrys, vLand);

}

function min() {
    var i1 = sessionStorage.getItem('i');
    var vLand = DataFromJs.Gdata[i1].country;
    i1 = i1 - 1;
    sessionStorage.setItem('i', i1);
    ShowDataInTable(DataFromJs.Gdata);
    var i2 = sessionStorage.getItem('i');
    showCountryFromTableToMap(DataFromJs.Gdata[i2].country, DataFromJs.GaAllCountrys, vLand);

}

var i;

function complete(inputdata, status, NameID) {
    if (status === "complete") {
        document.getElementById(NameID).innerHTML = inputdata;
    }
}


function completeImage(inputdata, status, NameID) {
    if (status === "complete") {
        document.getElementById(NameID).src = inputdata;
    }
}

function completeTotalDist(inputdata, status, NameID) {
    if (status === "complete") {
        var totaal = 0;

        for (i = 0; i < inputdata.length; i++) {
            totaal = totaal + inputdata[i].distance;
        }
        

    }
}




var svg = function () {

    return document.getElementById('map').contentDocument;
}

//var myText = function(data) {
//var t = svg().getElementById('myText').firstElementChild;
//t.innerHTML = 'Hello World";
//}

var ShowCountry = function (aAllCountry, DataJSON) {

    //variabelen
    var t, state;

    //onzichtbaar maken van alle tokken
    //for (let iii = 0; iii < aAllCountry.length; iii++) {
    //t = svg().getElementById(aAllCountry[iii] + '-tok');

    // if (t == null) {
    //    console.log("not found: " + aAllCountry[iii] + '-tok')
    //    return
    // }
    // state = t.getAttribute('display');
    // state = 'none';
    //t.setAttribute('display', state);
    //}

    //tokken zoeken en weergeven op de kaart
    for (let i = 0; i < DataJSON.length; i++) {

        found = false;
        for (let ii = 0; ii < aAllCountry.length; ii++) {
            t = svg().getElementById(aAllCountry[ii] + '-tok');
            state = t.getAttribute('display');


            if (aAllCountry[ii] === DataJSON[i].country) {
                // console.log(aAllCountry[ii])
                ColorVisitCountry(aAllCountry[ii])
                state = 'block';
                t.setAttribute('display', state);
                found = true;
            }
        }
    }
}



var showCountryFromTableToMap = function (DataFromJSON, aAllCountry, vLand) {
    var t, state;
    var style_valuev = '';
    var style_value = '';
    if (vLand !== null || vLand !== undefined) {

        //alle landen zelfde kleur
        tv = svg().getElementById(vLand);

        var attrsV = tv.getAttribute('style').split(' ').join('').split(';');

        for (var i in attrsV) {
            var attrV = attrsV[i].split(':');
            if (attrV.length > 1) {
                var kv = attrV[0];
                var vv = attrV[1];

            }

            if (kv == 'fill') {
                // toggle oranje
                vv = '#34642d';
            }
            if (kv != "") {
                style_valuev = style_valuev + kv + ':' + vv + ';';

            }
        }
        tv.setAttribute('style', style_valuev);

    }


    //Land zoeken 
    for (var iic = 0; iic < aAllCountry.length; iic++) {

        if (aAllCountry[iic] === DataFromJSON) {

            t = svg().getElementById(aAllCountry[iic]);

            var attrs = t.getAttribute('style').split(' ').join('').split(';');

            for (var i in attrs) {
                var attr = attrs[i].split(':');
                if (attr.length > 1) {
                    var k = attr[0];
                    var v = attr[1];
                }

                if (k == 'fill') {
                    // toggle blue
                    v = '#2e4ae8';
                }
                if (k != "") {
                    style_value = style_value + k + ':' + v + ';';

                }
            }
            t.setAttribute('style', style_value);
            return

        }


    }
}

//
var AnimationMap = function (country, DataFromJs) {

    var ms = svg().getElementById(country);

    if (DataFromJs.GvCountryClick !== null || DataFromJs.GvCountryClick !== undefined) {
        var msv = svg().getElementById(DataFromJs.GvCountryClick);
    }

    ms.onclick = function (e) {
        var color = '#34642d';


        var style_valueV = '';
        var style_value = '';

        var numbersVisitors = CreatDataPrikboardOnClick(DataFromJs, country)

        if (DataFromJs.GvCountryClick !== null || DataFromJs.GvCountryClick !== undefined) {

            let LcountryV = DataFromJs.GvCountryClick;
            if (LcountryV === undefined) {
                LcountryV = "france";
            }

            //knip
            for (let i = 0; i < DataFromJs.length; i++) {
                if (DataFromJs[i].country === LcountryV) {
                    color = '#d7731d';
                    break;

                }
            }
            msv = svg().getElementById(LcountryV);

            var attrsV = msv.getAttribute('style').split(' ').join('').split(';');

            for (var iV in attrsV) {
                var attrV = attrsV[iV].split(':');
                if (attrV.length > 1) {
                    var kV = attrV[0];
                    var vV = attrV[1];

                }
                if (kV == 'fill') {
                    //toggle green
                    vV = color;

                }
                if (kV != "") {
                    style_valueV = style_valueV + kV + ':' + vV + ';';

                }
            }
            msv.setAttribute('style', style_valueV);

        }

        var Prikbord = document.getElementsByClassName("grid-item-map-data");
        Prikbord[0].style.visibility = "visible";

        var PbLand = document.getElementById("PbLand");
        var PbNumbersVisit = document.getElementById("PbNumbersVisit");
        PbLand.innerHTML = country;
        PbNumbersVisit.innerHTML = numbersVisitors;



        //Parsing style attribute values
        var attrs = ms.getAttribute('style').split(' ').join('').split(';');

        for (var i in attrs) {
            var attr = attrs[i].split(':');
            if (attr.length > 1) {
                var k = attr[0];
                var v = attr[1];

            }
            if (k == 'fill') {
                //Toggle blue
                v = '#2e4ae8';
                DataFromJs.GvCountryClick = country;
            }
            if (k != "") {
                style_value = style_value + k + ':' + v + ';';

            }
        }
        ms.setAttribute('style', style_value);

    };


    ms.onmouseover = function (e) {
        ms.style.cursor = 'pointer';
    };
    ms.onmouseout = function (e) {
        ms.style.cursor = 'auto';
    };
}

//Color visit country
var ColorVisitCountry = function (country) {

    var ms = svg().getElementById(country);

    var style_value = '';
    // parsing style attribute values
    var attrs = ms.getAttribute('style').split(' ').join('').split(';');

    for (var i in attrs) {
        var attr = attrs[i].split(':');
        if (attr.length > 1) {
            var k = attr[0];
            var v = attr[1];

        }
        if (k == 'fill') {
            // toggle color red vs green
            v = '#d7731d';

        }
        if (k != "") {
            style_value = style_value + k + ':' + v + ';';

        }
    }
    ms.setAttribute('style', style_value);
}


function ShowDataInTable(dataInJSON) {
    //show data in table
    var i1 = sessionStorage.getItem('i');

    if (i1 === null) {
        i1 = 0;
    }

    if (i1 > dataInJSON.length - 1) {
        i1 = 0;
    }

    if (i1 < 0) {
        i1 = dataInJSON.length - 1;
    }

    completeTotalDist(dataInJSON, "complete", "totaalDIST")
    sessionStorage.setItem('i', i1);
}

function CreatePrikboard(dataInJSON, parentID) {
    var post = document.getElementById(parentID);

    for (let i = 0; i < dataInJSON.length; i++) {

        //place to set new elements
        //creat elements
        var griditemPB = document.createElement("div");
        var gridContPbImage = document.createElement("div");
        var gridItemPBImage = document.createElement("div");
        var gridItemPBText = document.createElement("div");
        var image = document.createElement("img");

        //add css class
        griditemPB.classList.add("grid-item-Prikbord");
        gridContPbImage.classList.add("grid-container-PB-Image");
        gridItemPBImage.classList.add("grid-item-PB-Image");
        gridItemPBText.classList.add("grid-item-PB-Text");
        image.classList.add("grid-item-PB-Image-Style");

        //add data from data Object
        gridItemPBText.innerHTML = dataInJSON[i].country;
        image.src = dataInJSON[i].imgScr;

        //add to the webpage
        griditemPB.appendChild(gridContPbImage);
        gridContPbImage.appendChild(gridItemPBImage);
        gridItemPBImage.appendChild(image)
        gridContPbImage.appendChild(gridItemPBText);

        //set the new elements
        post.appendChild(griditemPB);
    }
}

function RemovePrikboardMap(parentID) {
    var post = document.getElementById("dataPostMap");
    var child = document.getElementsByClassName("grid-item-map-data-PB");
    var childKopie = [];
    var NumbersOffChild = 0;

    NumbersOffChild = child.length;

    for (let i = 0; i < NumbersOffChild; i++) {
        childKopie[i] = child[i];
    }

    for (let i = 0; i < NumbersOffChild; i++) {
        post.removeChild(childKopie[i]);
    }
}



function CreatePrikboardMap(dataInJSON, i, parentID) {
    var post = document.getElementById(parentID);

    //place to set new elements
    //creat elements
    var griditemPB = document.createElement("div");
    var gridContPbImage = document.createElement("div");
    var gridItemPBImage = document.createElement("div");
    var gridItemPBText = document.createElement("div");
    var image = document.createElement("img");


    //add css class
    griditemPB.classList.add("grid-item-map-data-PB");
    gridContPbImage.classList.add("grid-container-map-data-Image-PB");
    gridItemPBImage.classList.add("grid-item-map-data-Image-PB");
    gridItemPBText.classList.add("grid-item-map-data-Text-PB");
    image.classList.add("grid-item-map-data-Image-Style-PB");


    //add data from data Object
    gridItemPBText.innerHTML = dataInJSON[i].name;
    image.src = dataInJSON[i].imgScr;

    //add to the webpage
    griditemPB.appendChild(gridContPbImage);
    gridContPbImage.appendChild(gridItemPBImage);
    gridItemPBImage.appendChild(image)
    gridContPbImage.appendChild(gridItemPBText);


    //set the new elements
    post.appendChild(griditemPB);

}

function CreatePrikboardMapEmty(dataInJSON, i, parentID) {
    var post = document.getElementById(parentID);

    //place to set new elements
    //creat elements
    var griditemPB = document.createElement("div");
    var gridContPbImage = document.createElement("div");
    var gridItemPBImage = document.createElement("div");
    var gridItemPBText = document.createElement("div");
    var image = document.createElement("img");


    //add css class
    griditemPB.classList.add("grid-item-map-data-PB");
    griditemPB.classList.add("PrikboardMapEmty");
    gridContPbImage.classList.add("grid-container-map-data-Image-PB");
    gridItemPBImage.classList.add("grid-item-map-data-Image-PB");
    gridItemPBText.classList.add("grid-item-map-data-Text-PB");
    image.classList.add("grid-item-map-data-Image-Style-PB");

    //add to the webpage
    griditemPB.appendChild(gridContPbImage);
    gridContPbImage.appendChild(gridItemPBImage);
    gridItemPBImage.appendChild(image)
    gridContPbImage.appendChild(gridItemPBText);

    //set the new elements
    post.appendChild(griditemPB);

}

function CreatDataPrikboardOnClick(dataInJSON, DataClickCountry) {
    var numberOfFound = 0;
    var lastID = 0;
    RemovePrikboardMap("dataPostMap");

    //Create new
    for (let i = 0; i < dataInJSON.length; i++) {
        if (dataInJSON[i].country === DataClickCountry) {
            //Creat new
            numberOfFound++;
            CreatePrikboardMap(dataInJSON, i, "dataPostMap");
            lastID = i;
        }
    }

    var modulo = numberOfFound % 2;

    if (modulo > 0) {
        CreatePrikboardMapEmty(dataInJSON, lastID, "dataPostMap");
    }

    if (numberOfFound == 0) {
        CreatePrikboardMapEmty(dataInJSON, lastID, "dataPostMap");
        CreatePrikboardMapEmty(dataInJSON, lastID, "dataPostMap");
    }
    return numberOfFound;
}

var main = function () {

    var country = [
        "kalimantan",
        "papua new guinea",
        "mexico",
        "estonia",
        "algeria",
        "morocco",
        "mauretania",
        "senegal",
        "gambia",
        "casamance",
        "bissau",
        "guinee",
        "sierra leone",
        "liberia",
        "ivoire",
        "mali",
        "burkina",
        "niger",
        "ghana",
        "togo",
        "benin",
        "nigeria",
        "tunisia",
        "libya",
        "egypt",
        "chad",
        "south_sudan",
        "sudan",
        "cameroon",
        "eritrea",
        "djibouti",
        "ethiopia",
        "somaliland",
        "soqotra",
        "somalia",
        "centrafrique",
        "sao tome",
        "principe",
        "bioko",
        "gabon",
        //"equatorial guinea",
        "congo",
        "cabinda",
        "drc",
        "rwanda",
        "burundi",
        "uganda",
        "kenya",
        "tanzania",
        "zambia",
        "angola",
        "malawi",
        "mozambique",
        "zimbabwe",
        "namibia",
        "botswana",
        "swaziland",
        "lesotho",
        "south africa",
        "greenland",
        "disko",
        "milne",
        "east antarctica",
        //"antarctic peninsula",
        //"thurston",
        //"alexander",
        //"smyley",
        //"robert",
        //"king george",
        // "james ross",
        //"elephant",
        "australia",
        "tasmania",
        "new zealand north island",
        "new zealand south island",
        "new caledonia",
        "sumatra",
        "east malaysia",
        //"brunei",
        "sulawesi",
        "maluku",
        "seram",
        "java",
        "bali",
        "lombok",
        "sumba",
        "flores",
        "timor",
        "new ireland",
        "new britain",
        "bougainville",
        "choiseul",
        "new georgia",
        "santa isabel",
        "malaita",
        "santa ana",
        "rennell",
        "espiritu santo",
        "malakula",
        "efate",
        "fiji",
        "palawan",
        "negros",
        "cebu",
        "samar",
        "luzon",
        "mindoro",
        "hainan",
        "taiwan",
        "kyushu",
        "shikoku",
        "honshu",
        "hokkaido",
        "iturup",
        "urup",
        "paramushir",
        "onekotan",
        "sakhalin",
        "bering island",
        "medny",
        "attu",
        "amchitka",
        "adak",
        "umnak",
        "unalaska",
        "st. lawrence island",
        "st. lawrence island west",
        "alaska",
        "chukotka",
        "wrangel-w",
        "unalaska west",
        "umnak west",
        "another aleutian west",
        "adak west",
        "amchitka west",
        "attu west",
        "kerguelen",
        "mauritius",
        "reunion",
        "madagascar",
        "grande comore",
        "mayotte",
        "aldabra",
        "praslin",
        "mahe",
        "male",
        "maldive",
        "gan",
        "terceira",
        "pico",
        "sao miguel",
        "madeira",
        "lanzarote",
        "gran canaria",
        "tenerife",
        "santo antao",
        "boa vista",
        "santiago",
        "kauai",
        "oahu",
        "kahului",
        "hawaii",
        "raiatea",
        "tahiti",
        "guadeloupe",
        "dominica",
        "martinique",
        "st. lucia",
        "st. vincent",
        "grenada",
        "trinidad",
        "puerto rico",
        //"haiti-dominican border",
        "domincan republic",
        "haiti",
        "falklands west",
        "falklands east",
        "iceland",
        "spitsbergen",
        "nordaustlandet",
        "edgeoya",
        "prince george",
        "salisbury",
        "wilczek",
        "bell",
        "novaya zemlya north",
        "novaya zemlya south",
        "komsomolets",
        "october",
        "bolshevik",
        "kotelny",
        "novaya sibir",
        "lyakhovsky",
        "wrangel",
        "sri lanka",
        "cuba",
        "bimini",
        "andros",
        "inagua",
        "eleuthera",
        "grand bahama",
        "jamaica",
        "irian jaya",
        "alaska-westcopy",
        "galapagos",
        "banks",
        "prince patrick",
        "eglinton",
        "mackenzie king",
        "king christian",
        "ellef ringnes",
        "amund ringnes",
        "axel heiberg",
        "victoria",
        "prince of wales",
        "prescott",
        "cornwallis",
        "bathurst",
        "devon",
        "baffin",
        "bylot",
        "ellesmere",
        "southhampton",
        "newfoundland",
        "canada",
        "usa",
        "haida gwaii",
        "vancouver",
        "guatemala",
        "honduras",
        "el salvador",
        "nicaragua",
        "costa rica",
        "panama",
        "colombia",
        "venezuela",
        "guyana",
        "suriname",
        "guyane",
        "ecuador",
        "peru",
        "bolivia",
        "paraguay",
        "uruguay",
        "argentina",
        "tierra del fuego chile",
        "tierra del fuego argentina",
        "chile",
        "chiloe",
        "brazil",
        "belize",
        "russia",
        "china",
        "mongolia",
        "north korea",
        "south korea",
        "kazakhstan",
        "turkmenistan",
        "uzbekistan",
        "tajikistan",
        "kirgizstan",
        "afghanistan",
        "pakistan",
        "india",
        "nepal",
        "bhutan",
        "bangladesh",
        "burma",
        "thailand",
        "malaysia",
        "cambodia",
        "laos",
        "vietnam",
        "georgia",
        "armenia",
        "azerbaijan",
        "iran",
        "turkey",
        "yemen",
        "oman",
        "emirates",
        "qatar",
        "kuwait",
        "saudi",
        "syria",
        "iraq",
        "jordan",
        "lebanon",
        "israel",
        "cyprus",
        "norway",
        "britain",
        //"ulster",
        "ireland",
        "sweden",
        "finland",
        "hiumaa",
        "saaremaa",
        "lithuania",
        "belarus",
        "poland",
        "spain",
        "portugal",
        "majorca",
        "sardinia",
        "corsica",
        "france",
        "netherlands",
        //"belgium",
        "germany",
        "denmark",
        "sjælland",
        "gotland",
        "switzerland",
        "czech",
        "slovakia",
        "austria",
        "hungary",
        "slovenia",
        "croatia",
        "bosnia",
        "italy",
        "sicily",
        "malta",
        "ukraine",
        "moldova",
        "romania",
        "montenegro",
        "serbia",
        "bulgaria",
        "albania",
        "macedonia",
        "greece",
        "thrace",
        "crete"
    ]

    DataFromJs.SaAllCountrys = country;

    DataIn();

    function DataIn() {
        var state;
        var jqxhr = $.getJSON("json/bezocht.json", function (json) {
                // console.log("success");
            })
            .done(function () {
                console.log("second success");
                state = "second success";
            })
            .fail(function () {
                // console.log("error");
                state = "error";

            })
            .always(function (json) {
                // console.log("complete");
                state = "complete";
                var dataIN = json.members;

                DataFromJs.Sdata = dataIN;
                ShowCountry(country, dataIN);
                ShowDataInTable(dataIN)
                //CreatePrikboard(dataIN, "dataPost");



                for (let i = 0; i < country.length; i++) {
                    AnimationMap(country[i], DataFromJs.Gdata);
                }
            });
    }












}