var ArduinoFirmata = require('arduino-firmata');
var mqtt = require("mqtt");
var board = new ArduinoFirmata().connect();

var mqttClient = mqtt.connect("mqtt://127.0.0.1");

mqttClient.on("connect",function(){
  mqttClient.subscribe("temp");
});



board.on("connect",function(){
  board.pinMode("A1", ArduinoFirmata.INPUT);
  setInterval(function(){
    var tempC = (5.0 * board.analogRead(1) * 100.0) / 1024).toString();
    console.log(tempC);
    mqttClient.publish("temp",tempC);
    setTimeout(function(){
      board.digitalWrite(13,false);
      board.servoWrite(9, 0);
    },1000);
    board.digitalWrite(13,true);
    board.servoWrite(9, Math.round(tempC));
  },5000);
});
