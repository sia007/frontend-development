(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function(response) {
                return response.data;
            });
        };



  service.getShortName = function (short_name) {
	let letter = short_name.charAt(0).toUpperCase();
let number = parseInt(short_name.slice(1));
number = number -1;


    return $http
      .get(ApiPath + '/menu_items/' + letter + '/menu_items/' + number.toString() + '.json')
      .then(function (response) {
        return response.data;
      });
  };
  
  }




})();
