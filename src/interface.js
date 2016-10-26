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

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url+token+units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })

}
