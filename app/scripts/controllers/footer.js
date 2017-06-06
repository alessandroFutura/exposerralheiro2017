'use strict';

angular.module('celeiro.controllers')
	.controller('FooterCtrl', ['$scope', 'Strings', function($scope, Strings) {
		Strings.promise.then(function(success) {
			$scope.strings = Strings.getData();
		});
	}]);