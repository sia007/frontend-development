(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      $urlRouterProvider.otherwise('/');
    
      $stateProvider
    
      .state('home', {
        url: '/',
        templateUrl: 'js/templates/home.html'
      })
    
      .state('categories', {
        url: '/categories',
        templateUrl: 'js/templates/categories.html',
        controller: 'CategoriesController as categories',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
      .state('categories.items', {
        url: '/items/{Id}',
        templateUrl: 'js/templates/items.html',
        controller: 'ItemsController as itemCtrl',
        resolve: {
            items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.Id) 
            }]
          }
      });
    
    }
    
    })();
    