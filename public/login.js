var app = angular.module('mainModule', []);

app.controller('mainController', function ($scope, $http) { //o scope liga o js e o template



  $scope.login = function () {
    $scope.out = $scope.user;
    var data = $scope.user;

    $http({
      method: "POST",
      url: "/Login/requist",
      data: data
    }).then(function (response) {
      $http({
        method: 'get',
        url: '/home'
      }).then(function (response) {
        console.log(response.data)
        window.open("/database","_self");


      })

    })
}



$scope.reset = function () {
  $scope.nome = '';
}
});