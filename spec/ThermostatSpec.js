'use strict';

describe('Thermostat',function(){
  var thermostat;


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can call the increase method', function(){
    thermostat.increase();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can call the decrease method', function(){
    thermostat.decrease();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

});
