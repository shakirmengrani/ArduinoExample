var ArduinoFirmata = require('arduino-firmata');
var mqtt = require("mqtt");

var board = new ArduinoFirmata().connect();
var mqttClient = mqtt.connect("mqtt://127.0.0.1");

var servoPin = 9;

mqttClient.on("connect",function(){
  mqttClient.subscribe("servo");
});

board.on('connect', function(){
  console.log("connect!! " + board.serialport_name);
  console.log("board version: " + board.boardVersion);

  mqttClient.on("message",function(topic,msg){
    var angle = parseInt(msg);
    board.servoWrite(servoPin, angle);
  });

  //
  // setInterval(function(){
  //   var angle = Math.random()*180;
  //   console.log("servo write 9 pin : " + angle);
  //   board.servoWrite(9, angle);
  // }, 2000);
});
