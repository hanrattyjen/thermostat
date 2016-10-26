$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#psm-status').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#psm-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
