(function () {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'SignupService'];
  function SignupController (MenuService, SignupService) {
    var ctrl = this;

    ctrl.submitForm = function () {
      ctrl.submitted = true;
      
      var promise = MenuService.getShortName(ctrl.dish);
      promise.then(function (response) {
        ctrl.validDish = true;
        SignupService.registerUser(
          ctrl.firstname,
          ctrl.lastname,
          ctrl.email,
          ctrl.phone,
          ctrl.dish.toUpperCase(),
          response
        );
      }).catch(function (error) {
        ctrl.validDish = false;
      })
      
    }
  }
  })();
