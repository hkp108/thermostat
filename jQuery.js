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
