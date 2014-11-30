(function(){

	var app = angular.module('page-elements',[ ]);

	//NAVIGATION VIEW DIRECTIVE CONTROLLER
	app.directive('websiteNav', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/website-nav.html'
		};
	});

	//HEADER VIEW DIRECTIVE CONTROLLER
	app.directive('websiteHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/website-header.html'
		};
	});

})();	