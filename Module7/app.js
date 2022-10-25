(function () {
    'use strict';
     angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('dollars', dollarFilter);
        
            ToBuyController.$inject = ['ShoppingListCheckOffService'];

            
               function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;

buy.items = ShoppingListCheckOffService.getBuyItems();





  buy.buyItems = function(index) {
    ShoppingListCheckOffService.buyItems(index);
  };
}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
     var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var buy = [
    { name: "Pineapple", quantity: 7, pricePerItem: 3},
    { name: "Banana", quantity: 10, pricePerItem: 1},
    { name: "Donut", quantity: 5, pricePerItem: 2},
    { name: "Eggs", quantity: 12, pricePerItem: 1},
    { name: "Bread", quantity: 4, pricePerItem: 6}
  ];

  var alreadyBought = [];

  service.getBuyItems = function() {
    return buy;
  }

  service.getBoughtItems = function() {
    return alreadyBought;
  }

  service.buyItems = function(index) {
	console.log(index);
	            var s = buy.splice(index, 1)[0];
            
            
            
              var item = {
                name: s.name,
                quantity: s.quantity,
                price: s.pricePerItem * s.quantity
            };

    alreadyBought.push(item);
  }
}


 function dollarFilter() {
       return function (input) {
         input = input || "";
         return "$$$" + input;
      }
    }


})();

      
      