'use strict';

describe('Button', function() {
  var button;
  var thermostat;

  beforeEach(function() {
    button = new Button();
    thermostat = jasmine.createSpyObj('thermostat', ['temperature', 'increase']);
  });

  it('increases the temperature', function() {
    button.up();
    expect(thermostat.increase).toHaveBeenCalled();
  });
});
