(function(){

	//DEFINE APP AND DEPENEDENCIES
	var app = angular.module('store',[ ]);

	//APPLICATION CONTROLLER
	app.controller('StoreController', function() {
		this.products = gems;		
	});

	//CREATE ITEM TO USE IN CONTROLLER
	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "Lucas ipsum dolor sit amet bria kor-uj kal wesell mirialan vima-da-boda dodonna grievous ka moff. Iblis vaathkree poggle bardan lando thennqora ki-adi-mundi vel jabba. Utapau kwi pellaeon castell bollux saurin. ",
			canPurchase: true,
			soldOut: true,
		},
		{
			name: "Pentagon Gem",
			price: 5.95,
			description: "Lars weequay logray bith beru kamino sifo-dyas xexto. Ugnaught san cognus noghri olié watto. ",
			canPurchase: true,
			soldOut: false,
		}	
	];
	
})();



