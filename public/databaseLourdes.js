var DataFromJs, DataFromJsCountrys;
var dataGroepen, dataWeide, dataVastprogramma, dataKeuzeprogramma;
var lastUpdateDataGroepen, lastUpdateDataWeide, lastUpdateDataVastprogramma, lastUpdateDataKeuzeprogramma;
var SelectWeides = ["A", "B", "C", "D"];
var selectVastProgramma = [];
var selectKeuzeProgramma = [];


var app = angular.module('databaseLourdes', ['ngRoute']);
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
      .when('/databaseBonden', {
        templateUrl: 'views/LourdesDBbonden.html',
        controller: 'LourdesDBbonden'
      })
      .when('/databaseWeide', {
        templateUrl: 'views/LourdesDBweide.html',
        controller: 'LourdesDBweide'
      })
      .when('/databaseVastProgramma', {
        templateUrl: 'views/LourdesDBvastprogramma.html',
        controller: 'LourdesDBvastprogramma'
      })
      .when('/databaseKeuzeProgramma', {
        templateUrl: 'views/LourdesDBkeuzeprogramma.html',
        controller: 'LourdesDBkeuzeprogramma'
      })
      .when('/info', {
        templateUrl: 'views/LourdesDBInfo.html',

      })
      .otherwise('/databaseBonden');
  })
  .controller('database',
    function ($scope, $http, $window) {
      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');

        dataGroepen = response.data.Groepen.bonden;
        lastUpdateDataGroepen = response.data.Groepen.lastUpdate;

        dataWeide = response.data.weide.weides;
        lastUpdateDataWeide = response.data.weide.lastUpdate;

        dataVastprogramma = response.data.vastProgramma.vast_programma;
        lastUpdateDataVastprogramma = response.data.vastProgramma.lastUpdate;

        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;
        lastUpdateDataKeuzeprogramma = response.data.keuzeProgramma.lastUpdate;

        $scope.dataVastprogramma = dataVastprogramma;


        $scope.dataGroepen = dataGroepen;
        $scope.selectWeide = ["A", "B", "C", "D"];


        for (let i = 0; i < dataVastprogramma.length; i++) {
          selectVastProgramma[i] = dataVastprogramma[i].wat;
        }

        for (let i = 0; i < dataKeuzeprogramma.length; i++) {
          selectKeuzeProgramma[i] = dataKeuzeprogramma[i].wat;
        }

        console.log(selectKeuzeProgramma)

      }, function (error) {
        console.log(error, 'can not get the data.');

      });

      $scope.CreateExportFile = function () {
        var postData = {
          lastUpdateDB: {
            full: "",
            time: 0
          }
        }

        let full = new Date();
        let time = full.getTime();

        postData.lastUpdateDB.full= String(full);
        postData.lastUpdateDB.time= time;
        $http({
          method: 'post',
          url: '/LourdesDBCreateExportFile',
          data: postData
        })
      }
    })
  .controller('LourdesDBbonden',

    function ($scope, $http, $window) {
      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');
        dataGroepen = response.data.Groepen.bonden;
        lastUpdateDataGroepen = response.data.Groepen.lastUpdate;

        dataWeide = response.data.weide.weides;
        lastUpdateDataWeide = response.data.weide.lastUpdate;

        dataVastprogramma = response.data.vastProgramma.vast_programma;
        lastUpdateDataVastprogramma = response.data.vastProgramma.lastUpdate;

        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;
        lastUpdateDataKeuzeprogramma = response.data.keuzeProgramma.lastUpdate;

        $scope.dataVastprogramma = dataVastprogramma;
        $scope.dataGroepen = dataGroepen;
        $scope.weides = SelectWeides;
        $scope.selectKeuzeprogramma = selectKeuzeProgramma;

        $scope.lastUpdate = lastUpdateDataGroepen;

        for (let i = 0; i < dataVastprogramma.length; i++) {
          selectVastProgramma[i] = dataVastprogramma[i].wat;
        }

        for (let i = 0; i < dataKeuzeprogramma.length; i++) {
          selectKeuzeProgramma[i] = dataKeuzeprogramma[i].wat;
        }

      }, function (error) {
        console.log(error, 'can not get data.');
      });
      $scope.done = "nShow";

      //edit data in form
      $scope.editUser = function (id) {
        $scope.bond = dataGroepen[id].bond;
        $scope.selectedWeide = dataGroepen[id].weide;
        $scope.id = dataGroepen[id].id;
        $scope.keuzeprogramma = dataGroepen[id].keuzeprogramma;
        $scope.vertrekplaats = dataGroepen[id].vertrekplaats;
        $scope.done = "Show";
      }

      //verwerpen
      $scope.verwerp = function () {
        $scope.bond = "";
        $scope.selectedWeide = "";
        $scope.id = "";
        $scope.keuzeprogramma = "";
        $scope.vertrekplaats = "";
        $scope.done = "nShow";
      }

      //Add data
      $scope.addData = function () {
        var data = {
          "id": 0,
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }

        data.id = $scope.dataGroepen.length;
        data.bond = $scope.bond;
        data.weide = $scope.selectedWeide;
        data.keuzeprogramma = $scope.keuzeprogramma;
        data.vertrekplaats = $scope.vertrekplaats;

        $scope.dataGroepen.push(data);

        $scope.id = "";
        $scope.bond = "";
        $scope.selectedWeide = "";
        $scope.keuzeprogramma = "";
        $scope.vertrekplaats = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataGroepen.full = String(full);
        lastUpdateDataGroepen.time = time;
      }

      //Aanpassen database
      $scope.changeData = function () {
        var data = {
          "id": 0,
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }

        data.id = $scope.id;
        data.bond = $scope.bond;
        data.weide = $scope.selectedWeide;
        data.keuzeprogramma = $scope.keuzeprogramma;
        data.vertrekplaats = $scope.vertrekplaats;

        var oldList = $scope.dataGroepen;
        $scope.dataGroepen = [];
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            x.id = data.id;
            x.bond = data.bond;
            x.weide = data.weide;
            x.keuzeprogramma = data.keuzeprogramma;
            x.vertrekplaats = data.vertrekplaats;

            $scope.dataGroepen.push(x);

          } else {

            $scope.dataGroepen.push(x);

          };
        });

        $scope.id = "";
        $scope.bond = "";
        $scope.selectedWeide = "";
        $scope.keuzeprogramma = "";
        $scope.vertrekplaats = "";
        $scope.done = "nShow"

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataGroepen.full = String(full);
        lastUpdateDataGroepen.time = time;
      }

      //Remove data
      $scope.removeData = function () {
        var data = {
          "id": 0,
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }

        data.id = $scope.id;

        var oldList = $scope.dataGroepen;
        $scope.dataGroepen = [];
        var i = 0;
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            console.log("wis")


          } else {
            x.id = i;
            i++;
            $scope.dataGroepen.push(x);
          };
        });
        console.log(dataGroepen)
        dataGroepen = $scope.dataGroepen;

        $scope.id = "";
        $scope.bond = "";
        $scope.selectedWeide = "";
        $scope.keuzeprogramma = "";
        $scope.vertrekplaats = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataGroepen.full = String(full);
        lastUpdateDataGroepen.time = time;
      }

      //Remove data new
      $scope.removeData1 = function (id) {
        var data = {
          "id": 0,
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }

        data.id = id;

        var oldList = $scope.dataGroepen;
        $scope.dataGroepen = [];
        var i = 0;
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            console.log("wis")


          } else {
            x.id = i;
            i++;
            $scope.dataGroepen.push(x);
          };
        });
        console.log(dataGroepen)
        dataGroepen = $scope.dataGroepen;

        $scope.id = "";
        $scope.bond = "";
        $scope.selectedWeide = "";
        $scope.keuzeprogramma = "";
        $scope.vertrekplaats = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataGroepen.full = String(full);
        lastUpdateDataGroepen.time = time;
      }

      //save data to database
      $scope.saveToDB = function () {
        var postData = {
          dataGroepen: {},
          lastUpdate: {}
        };

        postData.dataGroepen = dataGroepen;
        postData.lastUpdate = lastUpdateDataGroepen;

        $http({
          method: "POST",
          url: "/saveToDBBondenLourdes",
          data: postData

        })
        $window.location.reload();
      }
      //Download data to file
      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadBondenLourdes'
        })
      }

    })
  .controller('LourdesDBweide',

    function ($scope, $http, $window) {

      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');

        dataGroepen = response.data.Groepen.bonden;
        lastUpdateDataGroepen = response.data.Groepen.lastUpdate;

        dataWeide = response.data.weide.weides;
        lastUpdateDataWeide = response.data.weide.lastUpdate;

        dataVastprogramma = response.data.vastProgramma.vast_programma;
        lastUpdateDataVastprogramma = response.data.vastProgramma.lastUpdate;

        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;
        lastUpdateDataKeuzeprogramma = response.data.keuzeProgramma.lastUpdate;

        $scope.lastUpdate = lastUpdateDataWeide;

        $scope.dataVastprogramma = dataVastprogramma;

        $scope.dataWeide = dataWeide;
        $scope.weides = SelectWeides;

        $scope.VastProgrammaSelect = selectVastProgramma;
        $scope.VastProgrammaSelect_VM_2208 = selectVastProgramma;

      }, function (error) {
        console.log(error, 'can not get data.');


      });

      $scope.done = "nShow";

      //edit data in form
      $scope.editUser = function (id) {
        $scope.weide = dataWeide[id].weide;
        $scope.id = dataWeide[id].id;
        $scope.NM_2108 = dataWeide[id].NM_2108;
        $scope.VM_2208 = dataWeide[id].VM_2208;
        $scope.NM_2208 = dataWeide[id].NM_2208;
        $scope.VM_2308 = dataWeide[id].VM_2308;
        $scope.NM_2308 = dataWeide[id].NM_2308;
        $scope.VM_2508 = dataWeide[id].VM_2508;
        $scope.NM_2508 = dataWeide[id].NM_2508;
        $scope.VM_2608 = dataWeide[id].VM_2608;
        $scope.NM_2608 = dataWeide[id].NM_2608;
        $scope.done = "Show";
      }

      //verwerpen
      $scope.verwerp = function () {
        $scope.weide = "";
        $scope.id = "";
        $scope.NM_2108 = "";
        $scope.VM_2208 = "";
        $scope.NM_2208 = "";
        $scope.VM_2308 = "";
        $scope.NM_2308 = "";
        $scope.VM_2508 = "";
        $scope.NM_2508 = "";
        $scope.VM_2608 = "";
        $scope.NM_2608 = "";
        $scope.done = "nShow";
      }


      //add data
      $scope.addData = function () {
        var data = {
          "id": 0,
          "weide": "",
          "NM_2108": "",
          "VM_2208": "",
          "NM_2208": "",
          "VM_2308": "",
          "NM_2308": "",
          "VM_2508": "",
          "NM_2508": "",
          "VM_2608": "",
          "NM_2608": ""
        }

        data.id = $scope.dataWeide.length;
        data.weide = $scope.weide;
        data.NM_2108 = $scope.NM_2108;
        data.VM_2208 = $scope.VM_2208;
        data.NM_2208 = $scope.NM_2208;
        data.VM_2308 = $scope.VM_2308;
        data.NM_2308 = $scope.NM_2308;
        data.VM_2508 = $scope.VM_2508;
        data.NM_2508 = $scope.NM_2508;
        data.VM_2608 = $scope.VM_2608;
        data.NM_2608 = $scope.NM_2608;

        console.log(data)

        $scope.dataWeide.push(data);

        $scope.id = "";
        $scope.weide = "";
        $scope.NM_2108 = "";
        $scope.VM_2208 = "";
        $scope.NM_2208 = "";
        $scope.VM_2308 = "";
        $scope.NM_2308 = "";
        $scope.VM_2508 = "";
        $scope.NM_2508 = "";
        $scope.VM_2608 = "";
        $scope.NM_2608 = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataWeide.full = String(full);
        lastUpdateDataWeide.time = time;
      }



      //Aanpassen database
      $scope.changeData = function () {
        var data = {
          "id": 0,
          "weide": "",
          "NM_2108": "",
          "VM_2208": "",
          "NM_2208": "",
          "VM_2308": "",
          "NM_2308": "",
          "VM_2508": "",
          "NM_2508": "",
          "VM_2608": "",
          "NM_2608": ""
        }

        data.id = $scope.id;
        data.weide = $scope.weide;
        data.NM_2108 = $scope.NM_2108;
        data.VM_2208 = $scope.VM_2208;
        data.NM_2208 = $scope.NM_2208;
        data.VM_2308 = $scope.VM_2308;
        data.NM_2308 = $scope.NM_2308;
        data.VM_2508 = $scope.VM_2508;
        data.NM_2508 = $scope.NM_2508;
        data.VM_2608 = $scope.VM_2608;
        data.NM_2608 = $scope.NM_2608;

        var oldList = $scope.dataWeide;
        $scope.dataWeide = [];
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            x.id = data.id;
            x.weide = data.weide;
            x.NM_2108 = data.NM_2108;
            x.VM_2208 = data.VM_2208;
            x.NM_2208 = data.NM_2208;
            x.VM_2308 = data.VM_2308;
            x.NM_2308 = data.NM_2308;
            x.VM_2508 = data.VM_2508;
            x.NM_2508 = data.NM_2508;
            x.VM_2608 = data.VM_2608;
            x.NM_2608 = data.NM_2608;


            $scope.dataWeide.push(x);

          } else {

            $scope.dataWeide.push(x);

          };
        });
        $scope.id = "";
        $scope.weide = "";
        $scope.NM_2108 = "";
        $scope.VM_2208 = "";
        $scope.NM_2208 = "";
        $scope.VM_2308 = "";
        $scope.NM_2308 = "";
        $scope.VM_2508 = "";
        $scope.NM_2508 = "";
        $scope.VM_2608 = "";
        $scope.NM_2608 = "";
        $scope.done = "nShow";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataWeide.full = String(full);
        lastUpdateDataWeide.time = time;
      }

      //Remove data
      $scope.removeData = function () {
        var data = {
          "id": 0,
          "weide": "",
          "NM_2108": "",
          "VM_2208": "",
          "NM_2208": "",
          "VM_2308": "",
          "NM_2308": "",
          "VM_2508": "",
          "NM_2508": "",
          "VM_2608": "",
          "NM_2608": ""
        }

        data.id = $scope.id;

        $http({
          method: 'post',
          url: '/deletdataWeideLourdes',
          data: data
        })
        $window.location.reload();
      }

      $scope.removeData1 = function (id) {
        var data = {
          "id": 0,
          "weide": "",
          "NM_2108": "",
          "VM_2208": "",
          "NM_2208": "",
          "VM_2308": "",
          "NM_2308": "",
          "VM_2508": "",
          "NM_2508": "",
          "VM_2608": "",
          "NM_2608": ""
        }

        data.id = id;

        var oldList = $scope.dataWeide;
        $scope.dataWeide = [];
        var i = 0;
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            console.log("wis")


          } else {
            x.id = i;
            i++;
            $scope.dataWeide.push(x);
          };
        });
        console.log(dataWeide)
        dataWeide = $scope.dataWeide;

        $scope.id = "";
        $scope.weide = "";
        $scope.NM_2108 = "";
        $scope.VM_2208 = "";
        $scope.NM_2208 = "";
        $scope.VM_2308 = "";
        $scope.NM_2308 = "";
        $scope.VM_2508 = "";
        $scope.NM_2508 = "";
        $scope.VM_2608 = "";
        $scope.NM_2608 = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataWeide.full = String(full);
        lastUpdateDataWeide.time = time;
      }

      //save data to database
      $scope.saveToDB = function () {
        var postData = {
          dataWeide: {},
          lastUpdate: {}
        };

        postData.dataWeide = dataWeide;
        postData.lastUpdate = lastUpdateDataWeide;

        $http({
          method: "POST",
          url: "/saveToDBWeidesLourdes",
          data: postData
        })

        $window.location.reload();
      }
      //Download data to file
      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadWeidesLourdes'
        })
      }
    })
  .controller('LourdesDBvastprogramma',

    function ($scope, $http, $window) {

      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');
        dataGroepen = response.data.Groepen.bonden;
        lastUpdateDataGroepen = response.data.Groepen.lastUpdate;

        dataWeide = response.data.weide.weides;
        lastUpdateDataWeide = response.data.weide.lastUpdate;

        dataVastprogramma = response.data.vastProgramma.vast_programma;
        lastUpdateDataVastprogramma = response.data.vastProgramma.lastUpdate;

        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;
        lastUpdateDataKeuzeprogramma = response.data.keuzeProgramma.lastUpdate;

        $scope.lastUpdate = lastUpdateDataVastprogramma;

        $scope.dataVastprogramma = dataVastprogramma;


      }, function (error) {
        console.log(error, 'can not get data.');

      });
      $scope.done = "nShow";


      //edit data in form
      $scope.editUser = function (id) {
        $scope.id = dataVastprogramma[id].id;
        $scope.wat = dataVastprogramma[id].wat;
        $scope.waar = dataVastprogramma[id].waar;
        $scope.duur = dataVastprogramma[id].duur;
        $scope.start = dataVastprogramma[id].start;
        $scope.stop = dataVastprogramma[id].stop;
        $scope.benodigdheden = dataVastprogramma[id].benodigdheden;
        $scope.beschrijving = dataVastprogramma[id].beschrijving;
        $scope.done = "Show";
      }

      //verwerp
      $scope.verwerp = function () {
        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";
        $scope.done = "nShow";
      }

      //Add data
      $scope.addData = function () {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = $scope.dataVastprogramma.length;
        data.wat = $scope.wat;
        data.waar = $scope.waar;
        data.duur = $scope.duur;
        data.start = $scope.start;
        data.stop = $scope.stop;
        data.benodigdheden = $scope.benodigdheden;
        data.beschrijving = $scope.beschrijving;

        $scope.dataVastprogramma.push(data);

        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataVastprogramma.full = String(full);
        lastUpdateDataVastprogramma.time = time;

      }

      //Aanpassen database
      $scope.changeData = function () {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = $scope.id;
        data.wat = $scope.wat;
        data.waar = $scope.waar;
        data.duur = $scope.duur;
        data.start = $scope.start;
        data.stop = $scope.stop;
        data.benodigdheden = $scope.benodigdheden;
        data.beschrijving = $scope.beschrijving;

        var oldList = $scope.dataVastprogramma;
        $scope.dataVastprogramma = [];
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            x.id = data.id;
            x.wat = data.wat;
            x.waar = data.waar;
            x.duur = data.duur;
            x.start = data.start;
            x.stop = data.stop;
            x.benodigdheden = data.benodigdheden;
            x.beschrijving = data.beschrijving;

            $scope.dataVastprogramma.push(x);

          } else {

            $scope.dataVastprogramma.push(x);

          };
        });

        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";
        $scope.done = "nShow";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataVastprogramma.full = String(full);
        lastUpdateDataVastprogramma.time = time;
      }

      //Remove data
      $scope.removeData = function () {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = $scope.id;

        $http({
          method: 'post',
          url: '/deletdataVastProgrammaLourdes',
          data: data
        })
      }
      //Remove data new
      $scope.removeData1 = function (id) {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = id;

        var oldList = $scope.dataVastprogramma;
        $scope.dataVastprogramma = [];
        var i = 0;
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            console.log("wis")


          } else {
            x.id = i;
            i++;
            $scope.dataVastprogramma.push(x);
          };
        });

        dataVastprogramma = $scope.dataVastprogramma;

        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataVastprogramma.full = String(full);
        lastUpdateDataVastprogramma.time = time;
      }

      //save data to database
      $scope.saveToDB = function () {
        var postData = {
          dataVastprogramma: {},
          lastUpdate: {}
        };

        postData.dataVastprogramma = dataVastprogramma;
        postData.lastUpdate = lastUpdateDataVastprogramma;

        $http({
          method: "POST",
          url: "/saveToDBVastProgrammaLourdes",
          data: postData
        })
        $window.location.reload();
      }

      //Download data to file
      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadVastProgrammaLourdes'
        })
      }

    })
  .controller('LourdesDBkeuzeprogramma',
    function ($scope, $http, $window) {

      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');
        dataGroepen = response.data.Groepen.bonden;
        lastUpdateDataGroepen = response.data.Groepen.lastUpdate;

        dataWeide = response.data.weide.weides;
        lastUpdateDataWeide = response.data.weide.lastUpdate;

        dataVastprogramma = response.data.vastProgramma.vast_programma;
        lastUpdateDataVastprogramma = response.data.vastProgramma.lastUpdate;

        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;
        lastUpdateDataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;

        $scope.lastUpdate = lastUpdateDataVastprogramma;

        $scope.dataKeuzeprogramma = lastUpdateDataKeuzeprogramma;


      }, function (error) {
        console.log(error, 'can not get data.');


      });

      $scope.done = "nShow";

      //edit data in form
      $scope.editUser = function (id) {
        $scope.id = dataKeuzeprogramma[id].id;
        $scope.wat = dataKeuzeprogramma[id].wat;
        $scope.waar = dataKeuzeprogramma[id].waar;
        $scope.duur = dataKeuzeprogramma[id].duur;
        $scope.start = dataKeuzeprogramma[id].start;
        $scope.stop = dataKeuzeprogramma[id].stop;
        $scope.benodigdheden = dataKeuzeprogramma[id].benodigdheden;
        $scope.beschrijving = dataKeuzeprogramma[id].beschrijving;
        $scope.done = "Show";
      }

      $scope.verwerp = function () {
        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";
        $scope.done = "nShow";
      }

      //add data
      $scope.addData = function () {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = $scope.dataKeuzeprogramma.length;
        data.wat = $scope.wat;
        data.waar = $scope.waar;
        data.duur = $scope.duur;
        data.start = $scope.start;
        data.stop = $scope.stop;
        data.benodigdheden = $scope.benodigdheden;
        data.beschrijving = $scope.beschrijving;

        console.log(data)

        $scope.dataKeuzeprogramma.push(data);

        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataKeuzeprogramma.full = String(full);
        lastUpdateDataKeuzeprogramma.time = time;
      }

      //Aanpassen database
      $scope.changeData = function () {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = $scope.id;
        data.wat = $scope.wat;
        data.waar = $scope.waar;
        data.duur = $scope.duur;
        data.start = $scope.start;
        data.stop = $scope.stop;
        data.benodigdheden = $scope.benodigdheden;
        data.beschrijving = $scope.beschrijving;

        var oldList = $scope.dataKeuzeprogramma;
        $scope.dataKeuzeprogramma = [];
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            x.id = $scope.id;
            x.wat = data.wat;
            x.waar = data.waar;
            x.duur = data.duur;
            x.start = data.start;
            x.stop = data.stop;
            x.benodigdheden = data.benodigdheden;
            x.beschrijving = data.beschrijving;

            $scope.dataKeuzeprogramma.push(x);

          } else {

            $scope.dataKeuzeprogramma.push(x);
          };
        });

        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";
        $scope.done = "nShow";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataKeuzeprogramma.full = String(full);
        lastUpdateDataKeuzeprogramma.time = time;
      }

      //Remove data
      $scope.removeData = function () {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = $scope.id;

        $http({
          method: 'post',
          url: '/deletdataKeuzeProgrammaLourdes',
          data: data
        })
        $window.location.reload();
      }
      //Remove data new
      $scope.removeData1 = function (id) {
        var data = {
          "id": 0,
          "wat": "",
          "waar": "",
          "duur": "",
          "start": "",
          "stop": "",
          "benodigdheden": "",
          "beschrijving": ""
        }

        data.id = id;

        var oldList = $scope.dataKeuzeprogramma;
        $scope.dataKeuzeprogramma = [];
        var i = 0;
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            console.log("wis")


          } else {
            x.id = i;
            i++;
            $scope.dataKeuzeprogramma.push(x);
          };
        });
        console.log(dataKeuzeprogramma)

        dataKeuzeprogramma = $scope.dataKeuzeprogramma;

        $scope.id = "";
        $scope.wat = "";
        $scope.waar = "";
        $scope.duur = "";
        $scope.start = "";
        $scope.stop = "";
        $scope.benodigdheden = "";
        $scope.beschrijving = "";

        let full = new Date();
        let time = full.getTime();

        lastUpdateDataKeuzeprogramma.full = String(full);
        lastUpdateDataKeuzeprogramma.time = time;
      }

      //save data to database
      $scope.saveToDB = function () {
        var postData = {
          dataKeuzeprogramma: {},
          lastUpdate: {}
        };

        postData.dataKeuzeprogramma = dataKeuzeprogramma;
        postData.lastUpdate = lastUpdateDataVastprogramma;

        $http({
          method: "POST",
          url: "/saveToDBKeuzeProgrammaLourdes",
          data: postData
        })

        $window.location.reload();
      }

      //Download data to file
      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadKeuzeProgrammaLourdes'
        })
      }

    });