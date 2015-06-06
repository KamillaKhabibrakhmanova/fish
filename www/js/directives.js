angular.module('starter.directives', [])

.directive('fishCodes', function() {
	return {
		restrict:'EA',
		templateUrl:'../templates/codes.html'
	};
});