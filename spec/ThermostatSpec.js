'use strict';

describe('Thermostat',function(){
  var thermostat;


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees', function() {
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('can call the increase method', function(){
    thermostat.increase();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can call the decrease method', function(){
    thermostat.decrease();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  describe('Power-saving mode', function() {
    it('has a maximum temperature of 25 degrees when #powerSavingModeOn', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.maximumTemperature).toEqual(25);
    });

    it('has a maximum temperature of 32 degrees when #powerSavingModeOff', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.maximumTemperature).toEqual(32);
    });

  });

});
