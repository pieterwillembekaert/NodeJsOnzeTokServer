var DataFromJs, DataFromJsCountrys;
var dataGroepen, dataWeide, dataVastprogramma, dataKeuzeprogramma;
var SelectWeides = ["A", "B", "C", "D"];
var selectVastProgramma = [];
var selectKeuzeProgramma = [];


function DataIn() {
  var state;
  var jqxhr = $.getJSON("https://onzetokdewereldrond.herokuapp.com/data", function (json) {
          // console.log("success");
      })
      .done(function (json) {
          console.log("second success" + json);
          state = "second success";
      })
      .fail(function () {
          // console.log("error");
          state = "error";

      })
      .always(function (json) {
          // console.log("complete");
          state = "complete";
          var dataIN = json;
          console.log(dataIN)

      
      });
}





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

      .otherwise('/');
  })

  .controller('database',

    function ($scope, $http, $window) {

      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');
        dataGroepen = response.data.Groepen.bonden;
        dataWeide = response.data.weide;
        dataVastprogramma = response.data.vastProgramma.vast_programma;
        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;

        console.log(dataGroepen);
        console.log(dataWeide);
        console.log(dataVastprogramma);
        console.log(dataKeuzeprogramma);


        $scope.dataGroepen = dataGroepen;
        $scope.selectWeide = ["A", "B", "C", "D"];
       
        DataIn();
          
          for (let i = 0; i < dataVastprogramma.length; i++) {
            selectVastProgramma[i] = dataVastprogramma[i].wat;
          }

          for (let i = 0; i < dataKeuzeprogramma.length; i++) {
            selectKeuzeProgramma[i] = dataKeuzeprogramma[i].wat;
          }
       
          console.log(selectKeuzeProgramma)
       
      }, function (error) {
        console.log(error, 'can not get data.');

      });

    })
  .controller('LourdesDBbonden',

    function ($scope, $http, $window) {

      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');
        dataGroepen = response.data.Groepen.bonden;
        dataWeide = response.data.weide;
        dataVastprogramma = response.data.vastProgramma.vast_programma;
        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;

        console.log(dataGroepen);
        console.log(dataWeide);
        console.log(dataVastprogramma);
        console.log(dataKeuzeprogramma);

        $scope.dataGroepen = dataGroepen;
        $scope.weides = SelectWeides;
        $scope.selectKeuzeprogramma=selectKeuzeProgramma; 
        
        for (let i = 0; i < dataVastprogramma.length; i++) {
          selectVastProgramma[i] = dataVastprogramma[i].wat;
        }

        for (let i = 0; i < dataKeuzeprogramma.length; i++) {
          selectKeuzeProgramma[i] = dataKeuzeprogramma[i].wat;
        }
     
      }, function (error) {
        console.log(error, 'can not get data.');


      });



      $scope.editUser = function (id) {
        $scope.bond = dataGroepen[id].bond;
        $scope.selectedWeide = dataGroepen[id].weide;
        $scope.id = dataGroepen[id].id;
        $scope.keuzeprogramma= dataGroepen[id].keuzeprogramma; 
        $scope.vertrekplaats= dataGroepen[id].vertrekplaats; 

      }

      $scope.removeData = function () {
        var data = {
          "id": 0, 
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }

        data.id = $scope.id;

        $http({
          method: 'post',
          url: '/deletdataBondenLourdes',
          data: data
        })
        $window.location.reload();
      }


      $scope.addData = function () {
        var data = {
          "id": 0, 
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }

        data.bond = $scope.bond;
        data.weide = $scope.selectedWeide;
        data.keuzeprogramma = $scope.keuzeprogramma;
        data.vertrekplaats= $scope.vertrekplaats; 

    
        $http({
          method: "POST",
          url: "/newDataBondenLourdes",
          data: data
        })

        $window.location.reload();
      }


      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadBondenLourdes'
        })
      }

      $scope.changeData = function () {
        var data = {
          "id": 0, 
          "bond": "",
          "weide": "",
          "keuzeprogramma": "",
          "vertrekplaats": ""
        }
        data.bond = $scope.bond;
        data.weide = $scope.selectedWeide;
        data.id = $scope.id;
        data.keuzeprogramma= $scope.keuzeprogramma; 
        data.vertrekplaats= $scope.vertrekplaats; 
        console.log(data)
        $http({
          method: 'post',
          url: '/changedataBondenLourdes',
          data: data
        })
        //$window.location.reload();
      }

      $scope.logout = function () {
        $http({
          method: 'post',
          url: '/logout',
          data: data
        })
        window.open("/login", "_self");

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
        dataWeide = response.data.weide.weides;
        dataVastprogramma = response.data.vastProgramma.vast_programma;
        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;

        console.log(dataGroepen);
        console.log(dataWeide);
        console.log(dataVastprogramma);
        console.log(dataKeuzeprogramma);

        $scope.dataWeide = dataWeide;
        $scope.weides = SelectWeides;
        
        
        console.log(selectVastProgramma)
        $scope.VastProgrammaSelect = selectVastProgramma;
        $scope.VastProgrammaSelect_VM_2208 = selectVastProgramma;
      }, function (error) {
        console.log(error, 'can not get data.');


      });



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
      }

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
        $http({
          method: "POST",
          url: "/newDataWeideLourdes",
          data: data
        })
        $window.location.reload();
      }

      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadWeidesLourdes'
        })
      }

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

        console.log(data)



        $http({
          method: 'post',
          url: '/changedataWeidesLourdes',
          data: data
        })
        $window.location.reload();
      }

      $scope.logout = function () {
        $http({
          method: 'post',
          url: '/logout',
          data: data
        })
        window.open("/login", "_self");




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
        dataWeide = response.data.weide;
        dataVastprogramma = response.data.vastProgramma.vast_programma;
        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;

        console.log(dataGroepen);
        console.log(dataWeide);
        console.log(dataVastprogramma);
        console.log(dataKeuzeprogramma);

        $scope.dataVastprogramma = dataVastprogramma;


      }, function (error) {
        console.log(error, 'can not get data.');

      });



      $scope.editUser = function (id) {
        $scope.id = dataVastprogramma[id].id;
        $scope.wat = dataVastprogramma[id].wat;
        $scope.waar = dataVastprogramma[id].waar;
        $scope.duur = dataVastprogramma[id].duur;
        $scope.start = dataVastprogramma[id].start;
        $scope.stop = dataVastprogramma[id].stop;
        $scope.benodigdheden = dataVastprogramma[id].benodigdheden;
        $scope.beschrijving = dataVastprogramma[id].beschrijving;

      }

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



        data.wat = $scope.wat;
        data.waar = $scope.waar;
        data.duur = $scope.duur;
        data.start = $scope.start;
        data.stop = $scope.stop;
        data.benodigdheden = $scope.benodigdheden;
        data.beschrijving = $scope.beschrijving;




        $http({
          method: "POST",
          url: "/newDataVastProgrammaLourdes",
          data: data
        })
        $window.location.reload();
      }




      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadVastProgrammaLourdes'
        })
      }

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

        $http({
          method: 'post',
          url: '/changedataVastProgrammaLourdes',
          data: data
        })
        $window.location.reload();
      }

      $scope.logout = function () {
        $http({
          method: 'post',
          url: '/logout',
          data: data
        })
        window.open("/login", "_self");




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
        dataWeide = response.data.weide;
        dataVastprogramma = response.data.vastProgramma.vast_programma;
        dataKeuzeprogramma = response.data.keuzeProgramma.keuze_programma;

        console.log(dataGroepen);
        console.log(dataWeide);
        console.log(dataVastprogramma);
        console.log(dataKeuzeprogramma);

        $scope.dataKeuzeprogramma = dataKeuzeprogramma;



      }, function (error) {
        console.log(error, 'can not get data.');


      });



      $scope.editUser = function (id) {
        $scope.id = dataKeuzeprogramma[id].id;
        $scope.wat = dataKeuzeprogramma[id].wat;
        $scope.waar = dataKeuzeprogramma[id].waar;
        $scope.duur = dataKeuzeprogramma[id].duur;
        $scope.start = dataKeuzeprogramma[id].start;
        $scope.stop = dataKeuzeprogramma[id].stop;
        $scope.benodigdheden = dataKeuzeprogramma[id].benodigdheden;
        $scope.beschrijving = dataKeuzeprogramma[id].beschrijving;

      }

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

        data.wat = $scope.wat;
        data.waar = $scope.waar;
        data.duur = $scope.duur;
        data.start = $scope.start;
        data.stop = $scope.stop;
        data.benodigdheden = $scope.benodigdheden;
        data.beschrijving = $scope.beschrijving;

        console.log(data)



        $http({
          method: "POST",
          url: "/newDataKeuzeProgrammaLourdes",
          data: data
        })
        $window.location.reload();
      }




      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadKeuzeProgrammaLourdes'
        })
      }

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

        $http({
          method: 'post',
          url: '/changedatakeuzeProgrammaLourdes',
          data: data
        })
      }

      $scope.logout = function () {
        $http({
          method: 'post',
          url: '/logout',
          data: data
        })
        window.open("/login", "_self");




      }

    });