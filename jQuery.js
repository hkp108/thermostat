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
