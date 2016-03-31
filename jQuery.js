document.onload = function() {
  // thermostat = new Thermostat();
};
var thermostat = new Thermostat();
$('#display').html(thermostat.temp);


$('#increaseTemp').click(function(){
  thermostat.increaseTemp();
  $('#display').html(thermostat.temp);
});

$('#decreaseTemp').click(function(){
  thermostat.decreaseTemp();
  $('#display').html(thermostat.temp);
});

$('#resetTemp').click(function(){
  thermostat.resetTemp();
  $('#display').html(thermostat.temp);
});

$('#togglePowerSaving').click(function(){
  thermostat.togglePowerSaving();
  if(thermostat.powerSavingOn === true){
    $('#power-saving-status').html('on');
    thermostat.temp = 25;
    $('#display').html(thermostat.temp);
  }
  if(thermostat.powerSavingOn === false) {
    $('#power-saving-status').html('off');
  }
});

// $('#getCity').submit(event) {
//   event.preventDefault();
//   var city = $('#city').val();
//   $.ajax(){
//     url:'http://api.wunderground.com/api/a39ff0765d037ae8/conditions/q/uk/'+ city +'.json',
//     success: function(data){
//       $('#city-temp').text(data.responseJSON.current_observation.temperature_string);
//     };
//   };
// };

var weather = $.get('http://api.wunderground.com/api/a39ff0765d037ae8/conditions/q/uk/london.json');

$('#city-temp').text(weather.responseJSON.current_observation.temperature_string);


// $('#getCity').submit(function(event) {
//   event.preventDefault();
//   var city = $('#current-city').val();
//   $.get('http://api.wunderground.com/api/a39ff0765d037ae8/conditions/q/uk/'+ 'london' +'.json',function(data){
//     $('#city-temp').text(data.responseJSON.current_observation.temperature_string);
//   })
//   $('#city-temp').text(city)
// });
