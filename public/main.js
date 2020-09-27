angular.module('OnzeTokDeWereldRond', ['ngRoute'])
  .config(function ($locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true, // set HTML5 mode
        requireBase: false // I removed this to keep it simple, but you can set your own base url
      });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/prikbord', {
        templateUrl: 'views/prikbord.html',
        controller: 'prikbord'
      })
      .when('/verhaal', {
        templateUrl: 'views/verhaal.html',
        controller: function () {
          console.log('verhaal');
        }
      })
      .when('/volgons', {
        templateUrl: 'views/socialemedia.html',
        controller: function () {
          console.log('sociale media');
        }
      })
      .when('/tekenOnzeTok', {
        templateUrl: 'views/tekenOnzeTok.html',
        controller: function () {
          console.log('sociale media');
        }
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'dashboard'
      })
      .otherwise('/');
  })

  .controller('dashboard',
    function ($scope, $http, $window) {
      $http({
        method: 'get',
        url: '/TotalDist'
      }).then(function (response) {
        console.log(response, 'res');
        data = response.data;

        $scope.km100000 = data.z5;
        $scope.km10000 = data.z4;
        $scope.km1000 = data.z3;
        $scope.km100 = data.z2;
        $scope.km10 = data.z1;
        $scope.km1 = data.z;

      }, function (error) {
        console.log(error, 'can not get data.');
        $scope.km100000 = "x";
        $scope.km10000 = "x";
        $scope.km1000 = "x";
        $scope.km100 = "x";
        $scope.km10 = "x";
        $scope.km1 = "x";

      });

    }

  )


  .controller('prikbord', 
    function ($scope, $http, $window) {
      $http({
        method: 'get',
        url: '/data'
      }).then(function (response) {
        console.log(response, 'res');
        data = response.data;
        $scope.data = data.members;

      }, function (error) {
        console.log(error, 'can not get data.');
        $scope.data = [];

      });

    }

  );
