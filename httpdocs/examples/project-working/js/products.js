(function(){

	var app = angular.module('store-products',[ ]);

	//PRODUCT TITLE VIEW DIRECTIVE CONTROLLER
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-title.html'
		};
	});

	//PRODUCT DESC VIEW DIRECTIVE CONTROLLER
	app.directive('productDesc', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-desc.html'
		};
	});

	//PRODUCT SPECS VIEW DIRECTIVE CONTROLLER
	app.directive('productSpecs', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-specs.html'
		};
	});

	//PRODUCT REVIEWS VIEW DIRECTIVE CONTROLLER
	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-reviews.html'
		};
	});

	//PRODUCT IMAGES VIEW DIRECTIVE CONTROLLER
	app.directive('productImages', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-images.html',
			controller: function(){
			    this.current = 0;
			    this.setCurrent = function(imageNumber){
			      this.current = imageNumber || 0;
			    };
			},
			controllerAs: 'gallery'				
		};
	});

	//PRODUCT PANEL VIEW DIRECTIVE CONTROLLER WITH PANEL CONTROLLER
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-panels.html',
			controller:function(){
				this.tab = 1;	
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	//PRODUCT REVIEWS CONTROLLER
	app.controller("ReviewsController", function(){
		this.review = {};
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});	

})();	