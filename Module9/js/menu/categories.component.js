(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'js/templates/categories.html',
            bindings: {
                items: '<'
            }
        });

})();
