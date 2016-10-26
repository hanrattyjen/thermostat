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
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
});
