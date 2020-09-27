var DataFromJs, DataFromJsCountrys, DataFromJsCountrysTranslation;
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

      $scope.done = "nShow";



      $http({
        method: 'get',
        url: '/country'
      }).then(function (response) {
        console.log(response, 'res');
        data = response.data;
        //console.log(data)
        DataFromJsCountrys = data;
        //console.log(DataFromJsCountrys.countrys)
        $scope.countrys = DataFromJsCountrys.countrys;


      }, function (error) {
        console.log(error, 'can not get data.');
        //$scope.data = [];

      });

      $http({
        method: 'get',
        url: '/countryTranslation'
      }).then(function (response) {
        console.log(response, 'res');
        data = response.data;
        console.log(data)
        DataFromJsCountrysTranslation = data;
        console.log(DataFromJsCountrysTranslation.countrys)
        $scope.countrysTranslation = DataFromJsCountrysTranslation.countrys;


      }, function (error) {
        console.log(error, 'can not get data.');
        //$scope.data = [];

      });


      $scope.editUser = function (id) {
        //console.log(DataFromJs.members);

        $scope.id = DataFromJs.members[id].id;
        $scope.name = DataFromJs.members[id].name;
        $scope.country = DataFromJs.members[id].country;
        $scope.countryTanslation = DataFromJs.members[id].countryTanslation;
        $scope.distance = DataFromJs.members[id].distance;
        $scope.imgScr = DataFromJs.members[id].imgScr;
        $scope.date = DataFromJs.members[id].date;
        $scope.dateConvert = DataFromJs.members[id].dateConvert;
        $scope.year = DataFromJs.members[id].year;

        $scope.done = "Show";
      }

      //verwerpen
      $scope.verwerp = function () {
        $scope.name = "";
        $scope.country = "";
        $scope.countryTanslation = "";
        $scope.distance = "";
        $scope.imgScr = "";
        $scope.date = "";
        $scope.dateConvert = "";
        $scope.year = "";
        $scope.edithIndex = "";

        $scope.done = "nShow";
      }




      $scope.addData = function () {
        var data = {
          id: 0,
          name: "",
          country: "",
          countryTanslation: "",
          distance: 0,
          date: "",
          dateConvert: "",
          year: "",
          imgScr: ""
        }

        let scopeDate = $scope.date;
        let scopeDateConvert = scopeDate.toISOString();
        let convertDate = convertDateFromPage(scopeDateConvert);
        let convertDateYear = convertDateFromPageYear(scopeDateConvert);

        //land vertalen nl -> en
        let countryFromPage = $scope.countryTanslation;
        var country;

        for (let i = 0; i < DataFromJsCountrysTranslation.countrys.length; i++) {
          if (countryFromPage == DataFromJsCountrysTranslation.countrys[i]) {
            country = DataFromJsCountrys.countrys[i];
          }
        }; 

        data.id = $scope.data.length;
        data.name = $scope.name;
        data.country = country;
        data.countryTanslation = $scope.countryTanslation;
        data.distance = $scope.distance;
        data.imgScr = $scope.imgScr;
        data.date = $scope.date;
        data.dateConvert = convertDate;
        data.year = convertDateYear;

        $scope.data.push(data);

        console.log(data);
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
          $scope.countryTanslation = data.members[i].countryTanslation;
          $scope.distance = data.members[i].distance;
          $scope.imgScr = data.members[i].imgScr;
          $scope.date = data.members[i].date;
          $scope.dateConvert = data.members[i].dateConvert;
          $scope.year = data.members[i].year;

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
        var data = {
          id: 0,
          name: "",
          country: "",
          countryTanslation: "",
          distance: 0,
          date: "",
          dateConvert: "",
          year: "",
          imgScr: ""
        }

        console.log($scope.date);

        let scopeDate = $scope.date;

        let scopeDateConvert = scopeDate.toISOString();
        let convertDate = convertDateFromPage(scopeDateConvert);
        let convertDateYear = convertDateFromPageYear(scopeDateConvert);

        //land vertalen nl -> en
        let countryFromPage = $scope.countryTanslation;
        var country;

        for (let i = 0; i < DataFromJsCountrysTranslation.countrys.length; i++) {
          if (countryFromPage == DataFromJsCountrysTranslation.countrys[i]) {
            country = DataFromJsCountrys.countrys[i];
          }
        }; 



        data.id = $scope.id;
        data.name = $scope.name;
        data.country = country;
        data.countryTanslation = $scope.countryTanslation;
        data.distance = $scope.distance;
        data.imgScr = $scope.imgScr;
        data.date = $scope.date;
        data.dateConvert = convertDate;
        data.year = convertDateYear;

        var oldList = $scope.data;
        $scope.data = [];
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            x.id = data.id;
            x.name = data.name;
            x.country = data.country;
            x.countryTanslation = data.countryTanslation;
            x.distance = data.distance;
            x.date = data.date;
            x.dateConvert = data.dateConvert;
            x.year = data.year;
            x.imgScr = data.imgScr;

            $scope.data.push(x);

          } else {

            $scope.data.push(x);

          };
        });

        $scope.name = "";
        $scope.country = "";
        $scope.countryTanslation = "";
        $scope.distance = "";
        $scope.imgScr = "";
        $scope.date = "";
        $scope.dateConvert = "";
        $scope.year = "";
        $scope.edithIndex = "";

        $scope.done = "nShow";
      }



      $scope.logout = function () {
        $http({
          method: 'post',
          url: '/logout',
          data: data
        })
        window.open("/login", "_self");

      }

      //save data to database
      $scope.saveToDB = function () {
        var dataToSave;

        dataToSave = DataFromJs;


        var req = {
          method: 'POST',
          url: '/saveToDB',

          data: dataToSave
        }

        $http(req).then(function (response) {
          $window.alert("gelukt :-)");
          $window.location.reload();

        }, function () {
          $window.alert("mislukt :-(");

        });
      }


      //Download data to file
      $scope.downloadData = function () {
        $http({
          method: 'get',
          url: '/downloadWeidesLourdes'
        })
      }


      //Remove data new
      $scope.removeData1 = function (id) {
        var data = {
          id: "",
          name: "",
          country: "",
          countryTanslation: "",
          distance: 0,
          date: "",
          dateConvert: "",
          year: "",
          imgScr: ""
        }

        data.id = id;

        var oldList = $scope.data;
        $scope.data = [];
        var i = 0;
        angular.forEach(oldList, function (x) {
          if (x.id === data.id) {
            console.log("wis")

          } else {
            x.id = i;
            i++;
            $scope.data.push(x);
          };
        });

        DataFromJs = $scope.data;

        $scope.name = "";
        $scope.country = "";
        $scope.countryTanslation = "";
        $scope.distance = "";
        $scope.imgScr = "";
        $scope.date = "";
        $scope.dateConvert = "";
        $scope.year = "";
        $scope.edithIndex = "";
      }

    });


function convertDateFromPage(inputString) {
  console.log(inputString)
  let str = inputString;
  let res = str.split("-");
  let res1 = res[2].split("T");

  let year = res[0];
  let month = res[1];
  let day = res1[0];

  console.log(day + "-" + month + "-" + year)

  return day + "-" + month + "-" + year;
}

function convertDateFromPageYear(inputString) {
  let str = inputString;
  let res = str.split("-");
  let res1 = res[2].split("T");

  let year = res[0];


  return year;
}