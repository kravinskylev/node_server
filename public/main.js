var module = angular.module('sampleApp', []);

module.controller('mainController', function($scope) {
  $scope.hello = "Hello, Angular";

  $scope.data = ["item1", "item2", "item3"];
  $scope.logText = function(text) {
    console.log(text);
  };

  $scope.alertMsg = function(text) {
    alert(text);
  };
});
