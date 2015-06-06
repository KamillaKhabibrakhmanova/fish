angular.module('starter.controllers', [])

.controller('FormCtrl', function($scope, Species, Injuries, USStates, Fisheries, $state, $cordovaGeolocation) {

	$scope.species = Species;
	$scope.injuries = Injuries;
	$scope.states = USStates;
	$scope.fisheries = Fisheries;
	$scope.form = {};
	$scope.form.checked_injuries = [];

	$scope.progress = {
		partOne: true,
		partTwo: false,
		partThree: false,
		partFour: false,
		partFive: false,
		partSix: false
	};

	$scope.gotoNext = function(current, next) {
		$scope.progress[current] = false;
		$scope.progress[next] = true;
	};

	$scope.submitForm = function() {
		$state.go('tab.success');
	};

	$scope.goBack = function(before, current) {
		$scope.progress[before] = true;
		$scope.progress[current] = false;
	}

	$scope.submitForm = function() {};

	var posOptions = {timeout: 10000, enableHighAccuracy: false};
	$cordovaGeolocation
	  .getCurrentPosition(posOptions)
	  .then(function (position) {
	    $scope.form.latitude  = position.coords.latitude
	    $scope.form.longitude = position.coords.longitude
	    console.log('lat', $scope.form.latitude)
	    console.log('long', $scope.form.longitude)
	  }, function(err) {
	    console.log('error', err)
	  });




})

