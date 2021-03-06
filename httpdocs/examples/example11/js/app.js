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

	//TITLE VIEW DIRECTIVE CONTROLLER
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-title.html'
		};
	});

	//IMAGES VIEW DIRECTIVE CONTROLLER
	app.directive('productImages', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/product-images.html'
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
			name: "Dodecahedron",
			price: 2.95,
			description: "Lucas ipsum dolor sit amet bria kor-uj kal wesell mirialan vima-da-boda dodonna grievous ka moff. Iblis vaathkree poggle bardan lando thennqora ki-adi-mundi vel jabba. Utapau kwi pellaeon castell bollux saurin. ",
			images:[
				{
					full: 'images/dodecahedron-full.jpg',
					thumb: 'images/dodecahedron-thumb.jpg',
				},
				{
					full: 'images/dodecahedron2-full.jpg',
					thumb: 'images/dodecahedron2-thumb.jpg',
				}				
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
			price: 5.95,
			description: "Lars weequay logray bith beru kamino sifo-dyas xexto. Ugnaught san cognus noghri olié watto. ",
			images:[
				{
					full: 'images/pentagon-full.jpg',
					thumb: 'images/pentagon-thumb.jpg',
				},						
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



