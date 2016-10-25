'use strict';

describe('Thermostat',function(){
  var thermostat;


  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20 dergrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });
    
});
