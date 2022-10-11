 
 (function() {
    'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController)

        LunchCheckController.$inject = ['$scope'];

          function LunchCheckController($scope) {

                  $scope.l_items = '';
 $scope.message = '';
        $scope.font = '';
        
     
        
                $scope.checkLunch = function() {
                 var l_items =  $scope.l_items;


                            
                           
               l_items = l_items.split(",").map(item => item.trim());
                           l_items = l_items.filter(item => item.length > 0);

               

                 if (l_items.length === 0)   {
	                $scope.message = "Please enter data first"
                $scope.font = 'fail';
	
}  
else{
	
	 if (l_items.length <= 3) {
                    $scope.message = 'Enjoy!';
                                    $scope.font = 'success';

                } else {
                    $scope.message = 'Too much!';
                                    $scope.font = 'success';

                }
}



        }
          
    };
})();

