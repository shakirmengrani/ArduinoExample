var mqtt = require("mqtt");
var ArduinoFirmata = require('arduino-firmata');

var board = new ArduinoFirmata().connect();
var mqttClient = mqtt.connect("mqtt://127.0.0.1");

mqttClient.on("connect",function(){
  mqttClient.subscribe("temp");
});

board.on("connect",function(){
  board.pinMode(1, ArduinoFirmata.INPUT);
  var temp_old  = 0;
  setInterval(function(){
    var tempC = ((5.0 * board.analogRead(1) * 100.0) / 1024).toString();  
    if (tempC != temp_old){
      mqttClient.publish('temp',tempC);
      console.log(tempC);
      temp_old = tempC;
    }
  },5000);
});

mqttClient.on("message",function(channel,msg){
  if (msg.toString() == "reset"){
    board.reset(function(){
      console.log("Board resetted");
    });
  }
});

// board.on('analogChange', function(e){
//   if (e.pin == 1){
//     if (e.old_value != e.value){
//       mqttClient.publish('temp',Math.round((5.0 * e.value * 100.0) / 1024).toString());
//       console.log("Room temp is " +  Math.round((5.0 * e.value * 100.0) / 1024));
//     }
//   }
// });
