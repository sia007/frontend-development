(function() {
  'use strict';
  angular
    .module('MenuApp')
    .component('categories', {
      templateUrl: 'js/menu/templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();
