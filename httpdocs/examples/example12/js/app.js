(function(){

	//DEFINE APP AND DEPENEDENCIES
	var app = angular.module('store',[ ]);

	//APPLICATION CONTROLLER
	app.controller('StoreController', function() {
		this.products = gems;		
	});

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

	//TITLE VIEW DIRECTIVE CONTROLLER
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-title.html'
		};
	});

	//DESC VIEW DIRECTIVE CONTROLLER
	app.directive('productDesc', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-desc.html'
		};
	});

	//SPECS VIEW DIRECTIVE CONTROLLER
	app.directive('productSpecs', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-specs.html'
		};
	});

	//REVIEWS VIEW DIRECTIVE CONTROLLER
	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-reviews.html'
		};
	});

	//IMAGES VIEW DIRECTIVE CONTROLLER
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

	//REVIEWS CONTROLLER
	app.controller("ReviewsController", function(){
		this.review = {};
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	//CREATE ITEM TO USE IN CONTROLLER
	var gems = [
	    {
			name: 'Azurite',
			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			shine: 10,
			price: 110.50,
			rarity: 7,
			color: '#CCC',
			faces: 14,
			canPurchase: true,
			soldOut: false,			
			images: [
				"images/dodecahedron-full.jpg",
				"images/dodecahedron2-full.jpg",
			],
			reviews: [
				{
					stars: 5,
					body: "I love this gem!",
					author: "joe@example.org",
					color: "blue",
					terms: 1,
					createdOn: 1397490980837,					
				}, 
				{
				stars: 1,
					body: "This gem sucks.",
					author: "tim@example.org",
					color: "blue",
					terms: 1,
					createdOn: 1397490980837,						
				}
			]
	    },
		{
			name: "Dodecahedron",
			shine: 8,
			price: 2.95,
			rarity: 9,
			color: '#EEE',
			faces: 12,
			description: "Lucas ipsum dolor sit amet bria kor-uj kal wesell mirialan vima-da-boda dodonna grievous ka moff. Iblis vaathkree poggle bardan lando thennqora ki-adi-mundi vel jabba. Utapau kwi pellaeon castell bollux saurin. ",
			images: [
				"images/dodecahedron-full.jpg",
				"images/dodecahedron2-full.jpg",
			],
			canPurchase: true,
			soldOut: false,
			reviews:[
				{
					stars: 5,
					body: "I love this product!",
					author: "jeremykenedy@jeremykenedy.com",
					color: "red",
					terms: 1,
					createdOn: 1397490980837,
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "jeremykenedy@gmail.com",				
					color: "red",
					terms: 1,
					createdOn: 1397490980837,
				}
			],
		},
		{
			name: "Pentagon Gem",
			shine: 5,
			price: 5.95,
			rarity: 6,
			color: '#DDD',
			faces: 8,			
			description: "Lars weequay logray bith beru kamino sifo-dyas xexto. Ugnaught san cognus noghri olié watto. ",
			images: [
				"images/pentagon-full.jpg",
				"images/pentagon-thumb.jpg",
			],					
			canPurchase: true,
			soldOut: false,
			reviews:[
				{
					stars: 3,
					body: "Its OK!",
					author: "jeremykenedy@jeremykenedy.com",
					color: "red",
					terms: 1,
					createdOn: 1397490980837,
				},
				{
					stars: 2,
					body: "Meh",
					author: "jeremykenedy@gmail.com",					
					color: "red",
					terms: 1,
					createdOn: 1397490980837,
				}
			],
		}	
	];
	
})();



