var groepen = {
    KSAMoorslede: {
        weide: "A"

    },
    KSARoeselare: {
        weide: "B"

    },
    KSABrugge: {
        weide: "C"

    }
}

var groepenA = [{
        bond: "KSA Moorslede",
        weide: "A",
        id: 0

    },
    {
        bond: "KSA Roeselare",
        weide: "B",
        id: 1

    },
    {
        bond: " KSA Brugge",
        weide: "C",
        id: 2
    },
    {
        bond: "KSA Izegem",
        weide: "D",
        id: 3
    },
    {
        bond: "KSA Gullegem",
        weide: "A",
        id: 4
    }
]



var weideObj = {
    A: {
        NM_2108: "IN_IN_keuzeprogramma per weide",
        VM_2208: "Quest",
        NM_2208: "Quest",
        VM_2308: "Daguitstap",
        NM_2308: "Daguitstap",
        VM_2508: "Sport",
        NM_2508: "Sport",
        VM_2608: "Bergtocht",
        NM_2608: "Bergtocht",
    },
    B: {
        NM_2108: "IN_IN_keuzeprogramma per weide",
        VM_2208: "Sport",
        NM_2208: "Sport",
        VM_2308: "Quest",
        NM_2308: "Quest",
        VM_2508: "Bergtocht",
        NM_2508: "Bergtocht",
        VM_2608: "Daguitstap",
        NM_2608: "Daguitstap",
    },

    C: {
        NM_2108: "IN_IN_keuzeprogramma per weide",
        VM_2208: "Bergtocht",
        NM_2208: "Bergtocht",
        VM_2308: "Sport",
        NM_2308: "Sport",
        VM_2508: "Daguitstap",
        NM_2508: "Daguitstap",
        VM_2608: "Quest",
        NM_2608: "Quest",
    },
    D: {
        NM_2108: "IN_IN_keuzeprogramma per weide",
        VM_2208: "Daguitstap",
        NM_2208: "Daguitstap",
        VM_2308: "Bergtocht",
        NM_2308: "Bergtocht",
        VM_2508: "Quest",
        NM_2508: "Quest",
        VM_2608: "Sport",
        NM_2608: "Sport",
    },

}
var activiteitenObj = {
    Daguitstap: {
        wat: "daguitstap",
        waar: "Lourdes",
        benodigdheden: "wandelschoenen",
        duur: "4h",
        beschrijving: "We gaan op daguitstap!"
    },
    Bergtocht: {
        wat: "bergrocht",
        waar: "bergen",
        benodigdheden: "wandelschoenen",
        duur: "4h",
        beschrijving: "We gaan bergtocht!"
    },
    Sport: {
        wat: "Sport",
        waar: "Lourdes",
        benodigdheden: "sportschoenen",
        duur: "4h",
        beschrijving: "We gaan sporten!"
    },
    Quest: {
        wat: "Quest",
        waar: "Lourdes",
        benodigdheden: "sportschoenen",
        duur: "4h",
        beschrijving: "We spelen een spel!"
    }
}

var IN_dataGroepen, IN_dataWeide, IN_keuzeprogramma, IN_vastprogramma;
var idKeuze;
var keuzeBezoeken = "";

var app = angular.module('Timeline', ['ngRoute']);
app
    .config(function ($locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: false, // set HTML5 mode
                requireBase: false // I removed this to keep it simple, but you can set your own base url
            });
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/kiesbond', {
                templateUrl: 'views/kiesbond.html',
                controller: 'Kiesbond'
            })
            .when('/timeline', {
                templateUrl: 'views/timeline.html',
                controller: 'timeline'
            })
            .otherwise('/',{
                templateUrl: 'views/kiesbond.html',
                controller: 'Kiesbond'
            }
            );
    })
    .controller('Kiesbond', function ($scope, $http) {
        $http({
            method: 'get',
            url: '/dataLourdes'
        }).then(function (response) {
            console.log(response.data);
            console.log(response.data.Groepen);
            console.log(response.data.vastProgramma.vast_programma);
            console.log(response.data.keuzeProgramma.keuze_programma);
            IN_dataGroepen = response.data.Groepen.bonden;
            IN_dataWeide = response.data.weide.weides;
            IN_vastprogramma = response.data.vastProgramma.vast_programma;
            IN_keuzeprogramma = response.data.keuzeProgramma.keuze_programma;
            $scope.selectBond = response.data.Groepen.bonden;
        })


        $scope.bevestig = function () {
            let bond = $scope.selectedBond.bond;
            idKeuze = $scope.selectedBond.id;
            keuzeBezoeken = bond;
        }

    })
    .controller('timeline', function ($scope, $http) {
        /* $http({
             method: 'get',
             url: '/dataLourdes'
         }).then(function (response) {
             console.log(response.data.Groepen);
             IN_dataGroepen = response.data.Groepen.bonden;
             IN_dataWeide = response.data.weide;
             IN_vastprogramma= response.data.vastProgramma;
             IN_keuzeprogramma= response.data.keuzeProgramma;

             $scope.selectBond = response.data.Groepen.bonden;
             console.log(response.data)


         })*/

        console.log(keuzeBezoeken)
        console.log(idKeuze)
        console.log(IN_dataGroepen[idKeuze].bond)
        var idWeide = zoekIDweide(IN_dataWeide, IN_dataGroepen[idKeuze].weide)
        console.log(idWeide)
        $scope.bond = IN_dataGroepen[idKeuze].bond;
        $scope.weide = IN_dataGroepen[idKeuze].weide;
        console.log(IN_vastprogramma)
        $scope.weideProgramma = IN_dataWeide[idWeide];
        $scope.activiteit_NM_2108 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].NM_2108);
        $scope.activiteit_VM_2208 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].VM_2208);
        $scope.activiteit_NM_2208 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].NM_2208);
        $scope.activiteit_VM_2308 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].VM_2308);
        $scope.activiteit_NM_2308 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].NM_2308);
        $scope.activiteit_VM_2508 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].VM_2508);
        $scope.activiteit_NM_2508 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].NM_2508);
        $scope.activiteit_VM_2608 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].VM_2608);
        $scope.activiteit_NM_2608 = zoekIDvastProgramma(IN_vastprogramma, IN_dataWeide[idWeide].NM_2608);



    });

//Functions

function zoekIDweide(DataIn, keuze) {
    for (let i = 0; i < DataIn.length; i++) {
        if (DataIn[i].weide == keuze) {
            return DataIn[i].id;
        }
    }
}

function zoekIDvastProgramma(DataIn, keuze) {
    for (let i = 0; i < DataIn.length; i++) {
        if (DataIn[i].wat == keuze) {
            return DataIn[i];
        }
    }
}