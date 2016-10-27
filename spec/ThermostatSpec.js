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
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  it('can increase the temperature with the up button', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature with the down button', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  describe('Power saving mode', function() {
    it('has power-saving mode on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can turn power-saving mode off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch power-saving mode back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('has a maximum temperature of 25 degrees when power-saving mode is on by default', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('has a maximum temperature of 32 degrees when power-saving mode is off', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

  describe('Current energy usage', function() {
    it('shows low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.showEnergyUsage()).toEqual('low-usage');
    });
    it('shows medium-usage', function() {
      for (var i = 0; i < 4; i ++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.showEnergyUsage()).toEqual('medium-usage');
    });
    it('shows high-usage', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.showEnergyUsage()).toEqual('high-usage');
    });
  });

});
