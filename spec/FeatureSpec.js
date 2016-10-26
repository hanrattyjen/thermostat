'use strict';

describe('Feature Test:', function(){
  var thermostat;
  var button;

  beforeEach(function() {
    thermostat = new Thermostat();
    button = new Button(thermostat);
  });

  it('can increase the temperature with the up button', function() {
    button.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature with the down button', function(){
    button.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('reset button resets temperature to 20 degrees', function() {
    button.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
