'use strict';

describe('Feature Test:', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('can increase the temperature with the up button', function() {
    thermostat.increase();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature with the down button', function(){
    thermostat.decrease();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('reset button resets temperature to 20 degrees', function() {
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


});
