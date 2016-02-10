var ArduinoFirmata = require('arduino-firmata');
var mqtt = require("mqtt");
var mqttClient = mqtt.connect("mqtt://127.0.0.1");
var board = new ArduinoFirmata();
var led = 13;
var ledVal = false;
board.connect();
board.on("connect",function(){
  console.log("Arduino Connected on " + board.path);
});
mqttClient.on("connect",function(){
  mqttClient.subscribe("led");
});
mqttClient.on("message",function(Topic,message){
    var msg = message.toString().split('');
    var i = 0;
      setInterval(function () {
        if (i < msg.length){
          console.log(msg[i]);
          ledVal = (msg[i].toString() == "1" ? true : false);
          board.digitalWrite(led,ledVal);
          i++;
        }
      }, 1000);
});
board.on('digitalChange',function(e){
console.log("d");
if (e.pin == 13){
  mqttClient.publish("led",e.value);
}
});
