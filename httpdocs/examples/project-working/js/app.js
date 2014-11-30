(function(){

	//DEFINE APP AND DEPENEDENCIES
	var app = angular.module('store',['page-elements','store-products']);

	app.controller('StoreController', [ '$http',function($http){
		var store = this;
		store.products = [ ];
		$http.get('products.json').success(function(data){
			store.products = data;
		});
	}]);

})();



