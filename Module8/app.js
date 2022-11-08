/**
 * 
 */
 
 (function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    
    
        NarrowItDownController.$inject = ['MenuSearchService'];

function FoundItems(){
    var ddo = {
      restrict: 'E',
      templateUrl: 'found.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrow',
      bindToController: true
    };
    return ddo;
  };
 function NarrowItDownController(MenuSearchService) {
	
	var narrow = this;
	
	narrow.search = "";
	narrow.found = [1];
	
	
	
	
		
        narrow.get = function (){
	
	        var promise = MenuSearchService.getMatchedMenuItems(narrow.search);
	        if(narrow.search.trim() != ""){
	         promise.then(function(response){
        if(response.length > 0){
          narrow.found = response;
        }else{
          narrow.found = [];
        }
      })
}

else{
	 narrow.found = [];
}
	
	}

		
		
		
		  narrow.remove = function(itemIndex){
      narrow.found.splice(itemIndex, 1);
    }
	}
	
	
	    MenuSearchService.$inject = ["$http"];
	    
	        function MenuSearchService($http){
        var service = this;

service.getMatchedMenuItems = function(search){
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function(result){
        var foundItems = [];
        var items = result.data.menu_items;

        for(var i = 0; i < items.length; i++){
          if(items[i].description.toLowerCase().indexOf(search) != -1){
            foundItems.push(items[i]);
          }
        }

        return foundItems;
      })



}
}


    
    
    })();