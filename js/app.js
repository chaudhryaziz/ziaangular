var customersCtrl = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "John";
  $scope.lastName = "Doe";

  // Define utility functions

  var app = angular.module('readData', []);
  app.controller('customersCtrl', function($scope, $http) {
      $http.get("customers_mysql.php")
      .then(function (response) {$scope.names = response.data.records;});
  });


  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  };
};

var empcontroller = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "Bob";
  $scope.middleName = "Al";
  $scope.lastName = "Smith";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
};
