var DataFromJs, DataFromJsCountrys;
var dataGroepen, dataWeide;

var app = angular.module('databaseLourdes', []);
app
  .controller('database',

    function ($scope, $http, $window) {

      $http({
        method: 'get',
        url: '/dataLourdes'
      }).then(function (response) {
        console.log(response, 'res');
        dataGroepen = response.data.Groepen.bonden;
        dataWeide = response.data.weide;
        console.log(dataGroepen); 
        console.log(dataWeide)
       
        $scope.dataGroepen = dataGroepen;
        $scope.selectWeide= ["A","B","C","D"]; 
        

      }, function (error) {
        console.log(error, 'can not get data.');
        

      });

     

      $scope.editUser = function (id) {
        $scope.bond = dataGroepen[id].bond;
        $scope.weide = dataGroepen[id].weide;
        $scope.id = dataGroepen[id].id;
      }

      $scope.removeData = function () {
        var data= {
          "bond": "",
          "weide": "",
          "id": 0
        }

        data.id= $scope.id; 

        $http({
          method: 'post',
          url: '/deletdataLourdes',
          data: data
        })
      }


      $scope.addData = function () {
        var data= {
          "bond": "",
          "weide": ""
      
      }
        data.bond=$scope.bond;
        data.weide=$scope.weide;

        console.log(data)


       
        $http({
          method: "POST",
          url: "/newDataLourdes",
          data: data
        })
      }


     

      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadLourdes'
        })
      }

      $scope.changeData = function () {
        var data= {
          "bond": "",
          "weide": "", 
          "id": 0
        }

        data.bond = $scope.bond;
        data.weide = $scope.weide;
        data.id = $scope.id;
        $http({
          method: 'post',
          url: '/changedataLourdes',
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