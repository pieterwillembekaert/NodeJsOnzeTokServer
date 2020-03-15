var app = angular.module('OnzeTokDeWereldRond', []);

app.controller('switchCtrl', function ($scope, $http) {

  $scope.templates = [{
      name: '/static/home.html',
      url: '/static/home.html'
    }, {
      name: '/static/map.html',
      url: '/static/map.html'
    },
    {
      name: '/static/prikbord.html',
      url: '/static/prikbord.html'
    },
    {
      name: '/static/verhaal.html',
      url: '/static/verhaal.html'
    }
  ];


  $scope.hasPermissionToEdit = true;
  $scope.buttonText = 'Edit';
  $scope.isEditing = false;
  $scope.shared = 'shared value between templates.';
  $scope.template = $scope.templates[3];

  $scope.doEdit0 = function () {
    $scope.template = $scope.templates[0];

  };
  $scope.doEdit1 = function () {
    $scope.template = $scope.templates[1];

  };

  $scope.doEdit2 = function () {
    $scope.template = $scope.templates[2];

  };

  $scope.doEdit3 = function () {
    $scope.template = $scope.templates[3];

  };




  $scope.doEdit = function () {
    if ($scope.isEditing) {
      $scope.template = $scope.templates[0];
      $scope.isEditing = false;
      $scope.buttonText = 'Edit';
    } else {
      if ($scope.hasPermissionToEdit) {
        $scope.template = $scope.templates[1];
        $scope.isEditing = true;
        $scope.buttonText = 'Go back';
      } else {
        alert('you don\'t have permission to edit');
      }
    }
  }
});

app.controller('switchCtrl1', ['$scope', '$http', '$window',
  function ($scope, $http, $window) {

    $http.get('/data')
      .success(function (data, status, headers, config) {
        console.log(data)
        $scope.briel = data.members[0].name;

      })
      .error(function (data, status, headers, config) {
        $scope.briel = [];
      });

  }

]);



app.controller('dashboard', ['$scope', '$http', '$window',
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

]);

app.controller('prikbord', ['$scope', '$http', '$window',
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

]);
/* 
  $http.get("http://localhost:3000/data").then(function (response) {
    
  if(response.data.records===undefined){
    response.data.records={a:"10",b:"20",c:"30"}
  }
    $scope.myData11 = response.data.records;
  });
 
*/