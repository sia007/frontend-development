(function () {
  'use strict';

  angular.module('common')
  .service('SignupService', SignupService);

  function SignupService() {
    var service = this;

    service.registerUser = function (firstName, lastName, email, phone, dish, data) {
      service.firstName = firstName;
      service.lastName = lastName;
      service.email = email;
      service.phone = phone;
      service.dish = dish;
      service.data = data;
    };

    service.getUserInfo = function () {
      return {
        firstName: service.firstName,
        lastName: service.lastName,
        email: service.email,
        phone: service.phone,
        dish: service.dish,
        data:service.data
      };
    };
  }
})();