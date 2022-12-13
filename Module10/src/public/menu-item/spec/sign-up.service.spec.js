describe('favorite', function() {

  var $httpBackend;
  var ApiPath;
  var menuService;
  
  var b = {"description":"clear chicken broth with creamy corn and egg drop with white meat chicken pieces","large_portion_name":"quart","name":"Chicken Corn Soup","price_large":5.5,"price_small":2.75,"short_name":"A3","small_portion_name":"pint"};
  

  beforeEach(function() {
    module('common');

    inject(function ($injector) {

      $httpBackend = $injector.get('$httpBackend');
      menuService = $injector.get('MenuService');
      ApiPath = $injector.get('ApiPath');

    });
  });

  it('should return that favorite item does exist', function () {
    $httpBackend.whenGET("https://coursera-jhu-default-rtdb.firebaseio.com" + '/menu_items/A/menu_items/2.json').respond('A3');
	console.log(ApiPath);

    menuService.getShortName('A3').then(function(response) {
      expect(response.data).toEqual('A3');
    });

    $httpBackend.flush();

  });

  

});