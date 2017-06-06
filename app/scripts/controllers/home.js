'use strict';

angular.module('celeiro.controllers')
	.controller('HomeCtrl', ['$scope', 'Strings', 'Lightbox', function($scope, Strings, Lightbox) {

		$scope.strings = Strings.getData();

		Lightbox.templateUrl = 'partials/lightbox.html';

		var self = this;

		this.gallery = [];

		this.pages = 1;
		this.tmp = [];

		angular.forEach( $scope.strings.content.gallery.images, function( image, key ){				
			self.tmp.push(image);
			if( (key+1) % 6 == 0 ){
				self.gallery.push({
					page: self.pages,
					images: self.tmp
				});
				self.pages ++;
				self.tmp = [];
			}
		});

		$scope.openLightboxModal = function( images, index ){
			console.log(images);
			Lightbox.openModal( images, index );
		};

	}]);