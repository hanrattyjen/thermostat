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

  it('can call the reset method', function() {
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
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

  describe('displaying usage levels', function(){
    describe('when temp is below 18', function(){
      it('is considered low-usage', function(){
        for (var i = 0; i < 3; i++) {
        thermostat.decrease();
      };
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when temp is between 18 and 25', function(){
      it('is considered medium-usage', function(){
        for (var i = 0; i < 4; i++) {
        thermostat.increase();
      };
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when temp is above 25', function(){
      it('is considered high-usage', function(){
        for (var i = 0; i < 5; i++) {
        thermostat.increase();
      };
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });

});
