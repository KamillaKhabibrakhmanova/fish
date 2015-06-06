angular.module('starter.controllers', [])

.controller('FormCtrl', function($scope, Species, Injuries, USStates, $state) {
	$scope.species = Species;
	$scope.injuries = Injuries;
	$scope.states = USStates;
	$scope.form = {};
	$scope.form.checked_injuries = [];

	// $cordova.geoLocation.getCurrentPosition.then(function(position) {
	// 	console.log(position);
	// });

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
	
})

// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
