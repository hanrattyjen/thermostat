$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.temperature);
  })

  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.temperature);
  })

  
})
