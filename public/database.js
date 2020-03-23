var DataFromJs,DataFromJsCountrys;
var app = angular.module('databaseTok', []);
app
  .controller('database',
  
    function ($scope, $http, $window) {
      
      $http({
        method: 'get',
        url: '/data'
      }).then(function (response) {
        console.log(response, 'res');
        data = response.data;

        DataFromJs = data;
        $scope.data = data.members;

      }, function (error) {
        console.log(error, 'can not get data.');
        $scope.data = [];

      });

      $http({
        method: 'get',
        url: '/county'
      }).then(function (response) {
        console.log(response, 'res');
        data = response.data;
        console.log(data)
        DataFromJsCountrys = data;
        console.log(DataFromJsCountrys.countrys)
        $scope.countrys = DataFromJsCountrys.countrys;
       

      }, function (error) {
        console.log(error, 'can not get data.');
        //$scope.data = [];

      });


      $scope.editUser = function (id) {
        
        $http({
          method: 'get',
          url: '/data'
        }).then(function (response) {
          console.log(response, 'res');
          data = response.data;
      
          $scope.name = data.members[id].name;
          $scope.country = data.members[id].country;
          $scope.distance = data.members[id].distance;
          $scope.imgScr = data.members[id].imgScr;
          $scope.date = data.members[id].date;
          $scope.edithIndex = data.members[id].id;

        }, function (error) {
          console.log(error, 'can not get data.');
          $scope.new.name = [];

        });
      }
      



    

      $scope.addData = function () {
        var data = {
          name: "",
          country: "",
          distance: 0,
          date: "",
          imgScr: ""
        }
        data.name = $scope.name;
        data.country = $scope.country;
        data.distance = $scope.distance;
        data.imgScr = $scope.imgScr;
        data.date = $scope.date;
        console.log(data)
        console.log(DataFromJs)
        $http({
          method: "POST",
          url: "/newData",
          data: data
        })
      }


      $scope.openData = function () {
        $http({
          method: 'get',
          url: '/data'
        }).then(function (response) {
          console.log(response, 'res');
          data = response.data;
          let i = $scope.edithIndex;
          console.log(i)
          console.log(data.members[i].name)

          $scope.name = data.members[i].name;
          $scope.country = data.members[i].country;
          $scope.distance = data.members[i].distance;
          $scope.imgScr = data.members[i].imgScr;
          $scope.date = data.members[i].date;

        }, function (error) {
          console.log(error, 'can not get data.');
          $scope.new.name = [];

        });
      }

      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/download'
        })
      }
     
      $scope.changeData = function () {
        data.name = $scope.name;
        data.country = $scope.country;
        data.distance = $scope.distance;
        data.imgScr = $scope.imgScr;
        data.date = $scope.date;
        data.index = $scope.edithIndex;

        $http({
          method: 'post',
          url: '/changedata',
          data: data
        })
      }
      
    });