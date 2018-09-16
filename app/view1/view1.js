'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  
  $scope.Math = window.Math // use Math operator in Template

  $scope.totalValue = 0;
  $scope.storeValue = []
  $scope.finalArray = []
  $scope.charString = ''
  $scope.numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  $scope.operationArray = [{value: 1, sign: '+'}, {value: 2, sign: '-'}, {value: 3, sign: '*'}, {value: 4, sign: '/'}]
  
  $scope.numberClick = function(value) {

  	var count  = 0
  	var number = 0
  	$scope.storeValue.push(value)
  	for (var i = $scope.storeValue.length-1; i >= 0; i--) {
  		number = number + $scope.storeValue[i]*Math.pow(10, count)
  		count++;
  	}
  	
  	$scope.number = number;
  	$scope.charString = $scope.charString + value
  }

  $scope.operationClick = function(key) {

  		$scope.storeValue = []
	  	$scope.operator = key.value
	  	$scope.finalArray.push($scope.number)
	  	$scope.charString = $scope.charString + ' ' + key.sign + ' '
  	}

  	$scope.equalClick = function() {

	  	var total = 0;
	  	$scope.finalArray.push($scope.number)

	  	console.log($scope.finalArray)

	  	if ($scope.operator == 1) total = $scope.finalArray[0] + $scope.finalArray[1]
	    else if ($scope.operator == 2) total = $scope.finalArray[0] - $scope.finalArray[1]
		else if ($scope.operator == 3) total = $scope.finalArray[0] * $scope.finalArray[1]
		else if ($scope.operator == 4) total = $scope.finalArray[0] / $scope.finalArray[1]

		$scope.finalArray = []
		$scope.number = total
		$scope.totalValue = total
		$scope.charString = total
		
	}

	
  
}]);




