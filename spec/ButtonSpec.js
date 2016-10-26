'use strict';

describe('Button', function() {
  var button;
  var thermostat;

  beforeEach(function() {
    thermostat = jasmine.createSpyObj('thermostat', ['getCurrentTemperature', 'increase', 'decrease', 'powerSavingModeOn', 'powerSavingModeOff', 'resetTemp', 'energyUsage']);
    button = new Button(thermostat);
  });

  it('increases the temperature', function() {
    button.up();
    expect(thermostat.increase).toHaveBeenCalled();
  });

  it('decreases the temperature', function() {
    button.down();
    expect(thermostat.decrease).toHaveBeenCalled();
  });

  it('resets the temperature to 20 degrees', function() {
    button.reset();
    expect(thermostat.resetTemp).toHaveBeenCalled();
  });
});
