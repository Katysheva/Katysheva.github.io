		// var countryApp = angular.module('jsonApp', []);
		// countryApp.controller('MainCtrl', function ($scope, $http){
			
		// });

		(function () {
			'use strict';
			var app = angular.module('jsonApp', []);
			app.controller('MainCtrl', [ 
				'$scope', 
				'$http',
				function ($scope, $http) {
					$http.get('freelancers.json').success(function(data) {
						$scope.freelancers = data;
					});
				}])
		})();