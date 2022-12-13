describe('favorite', function() {

  var $httpBackend;
  var ApiPath;
  var menuService;
  
  var json = {"description":"clear chicken broth with creamy corn and egg drop with white meat chicken pieces","large_portion_name":"quart","name":"Chicken Corn Soup","price_large":5.5,"price_small":2.75,"short_name":"A3","small_portion_name":"pint"};
  

  beforeEach(function() {
    module('common');

    inject(function ($injector) {

      $httpBackend = $injector.get('$httpBackend');
      menuService = $injector.get('MenuService');
      ApiPath = $injector.get('ApiPath');

    });
  });

  it('should return that favorite item does exist', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items/A/menu_items/2.json').respond(json);

    menuService.getShortName('A3').then(function(response) {

      expect(response).toEqual(json);
    });

    $httpBackend.flush();

  });
  
  it('should return that favorite item does not exist', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items/X/menu_items/10.json').respond(undefined);

    menuService.getShortName('X11').then(function(response) {
      expect(response).toBeUndefined();
    });

    $httpBackend.flush();

  });

  

});