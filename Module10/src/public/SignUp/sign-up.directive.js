(function () {
  'use strict';

  angular.module('public')
  .directive('favorite', DishValidator);

  DishValidator.$inject = ['$q', 'MenuService']
  function DishValidator($q, MenuService) {
    var ddo = {
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
	

        ctrl.$asyncValidators.favorite = function(modelValue, viewValue) {
	
	
	
	
          return MenuService.getShortName(viewValue)
          
          
          
          .then(function (response) {
            
if (response === null){
	            return $q.reject();

	}
	else{
		return true;
	}
          })
          .catch(function (error) {
            return $q.reject();
          });
        };
      }
    };

    return ddo;
  }

})();
