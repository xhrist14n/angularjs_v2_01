
describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Mi Primera App de Angular JS 2';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
