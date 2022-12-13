(function () {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userInfo'];
  function MyInfoController(userInfo) {
	if(userInfo.firstName !== undefined){
    var ctrl = this;
    ctrl.userInfo = userInfo;
    ctrl.category = userInfo.dish.charAt(0).toUpperCase();
  }
  }
})();