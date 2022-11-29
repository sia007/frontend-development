(function () {
'use strict';

  angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'js/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.items', {
      url: '/item/{shortName}',
      templateUrl: 'js/templates/items.template.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          var shortName = $stateParams.shortName;
          return MenuDataService.getItemsForCategory(shortName);
        }]
      }
    });

  }

})();
