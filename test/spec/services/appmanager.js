'use strict';

describe('Service: appManager', function () {

  // load the service's module
  beforeEach(module('polhydroApp'));

  // instantiate service
  var appManager;
  beforeEach(inject(function (_appManager_) {
    appManager = _appManager_;
  }));

  it('should do something', function () {
    expect(!!appManager).toBe(true);
  });

});
