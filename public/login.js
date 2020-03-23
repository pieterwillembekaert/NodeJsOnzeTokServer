var app = angular.module('mainModule', []);

app.controller('mainController', function($scope, $http){ //o scope liga o js e o template
 
  $scope.login= function (){
    $scope.out=$scope.user;
    var data= $scope.user;
    
    $http({
      method: "POST",
      url: "/Login/requist",
      data: data
 })

    }
  
  $scope.reset = function()
  {
    $scope.nome = '';
  }
});