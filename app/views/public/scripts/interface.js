$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemperature(); // update model
    updateTemperature();
  });

  $('#temperature-down').click(function() { // event listener
    thermostat.decreaseTemperature(); // update model
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text('ON')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('OFF')
    updateTemperature();
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#save').click(function() {
    var currenttemperature = thermostat.getCurrentTemperature();
    var powersaving = thermostat.isPowerSavingModeOn();
    var city = $('#current-city').val();
    $.ajax({
      type: 'post',
      url: '/save',
      data: {
        'currenttemperature': currenttemperature,
        'powersaving': powersaving,
        'city': city
      }
    });
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=c49855571159f819f404955a8b1a8080';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
      $('#weather-description').text(data.weather[0].main);
    })
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
