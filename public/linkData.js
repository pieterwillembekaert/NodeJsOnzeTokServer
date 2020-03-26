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
        NM_2108: "keuzeprogramma per weide",
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
        NM_2108: "keuzeprogramma per weide",
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
        NM_2108: "keuzeprogramma per weide",
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
        NM_2108: "keuzeprogramma per weide",
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

var dataGroepen, dataWeide;


var app = angular.module('Timeline', []);
app.controller('home', function ($scope, $http) {
    $http({
        method: 'get',
        url: '/dataLourdes'
    }).then(function (response) {
        console.log(response.data.Groepen);
        dataGroepen = response.data.Groepen.bonden;
        dataWeide = response.data.weide;
        $scope.selectBond = response.data.Groepen.bonden;


    })

    var bond = "KSABrugge";

    //$scope.selectBond = groepenA;

    $scope.wijzig = function (IN) {
        bond = IN
        $scope.bond = bond;
        let weide = dataGroepen[bond].weide;
        $scope.dataBond = dataGroepen[bond];
        $scope.weideBond = dataWeide[weide];
        $scope.dag1 = dataGroepen[bond].dag1;
        let activiteit_VM_2608 = dataWeide[weide].VM_2608;
        $scope.activiteit_VM_2608 = activiteitenObj[activiteit_VM_2608];

    }

    $scope.bevestig = function () {
        let bond = $scope.selectedBond.bond;
        let id = $scope.selectedBond.id;
        $scope.bond = bond;

        let weide = dataGroepen[id].weide;
        $scope.dataBond = dataGroepen[id];
        $scope.weideBond = dataWeide[weide];
        $scope.dag1 = dataGroepen[bond].dag1;
        let activiteit_VM_2608 = dataWeide[weide].VM_2608;
        $scope.activiteit_VM_2608 = activiteitenObj[activiteit_VM_2608];
    }

});