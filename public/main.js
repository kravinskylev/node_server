var module = angular.module('sampleApp', []);

module.controller('mainController', function($scope) {
  $scope.hello = "Hello, Angular";
  $scope.money = 100;
  $scope.data = ["item1", "item2", "item3"];
  $scope.showDiv = false;

  $scope.logText = function(text) {
    console.log(text);
  };

  $scope.alertMsg = function(text) {
    alert(text);
  };

  $scope.toggleMoney = function() {
    $scope.showDiv = $scope.showDiv === false ? true : false;
  };
});
