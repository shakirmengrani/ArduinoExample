var ArduinoFirmata = require('arduino-firmata');
var mqtt = require("mqtt");
var arduino = new ArduinoFirmata();
var mqttClient  = mqtt.connect('mqtt://127.0.0.1');
var isOpen = false;
var led = 13;
var ledVal = 0;

var led_switch_interval = function(microsecond){
  setInterval(function(){
    if (isOpen){
      isOpen = false;
      arduino.digitalWrite(led,isOpen);
    }else{
      isOpen = true;
      arduino.digitalWrite(led,isOpen);
    }
  },microsecond);
};


var led_switch = function(io){
  switch(parseInt(io)){
    case 1:
    arduino.digitalWrite(led,true);
    break;
    case 0:
    arduino.digitalWrite(led,false);
    break;
    default:
    arduino.digitalWrite(led,false);
    break;
  };
};


arduino.connect(); // use default arduino
// arduino.connect('/dev/tty.usb-device-name');

arduino.on('connect', function(){
 led_switch_interval(88);
// led_switch(ledVal);
});

mqttClient.on('connect', function () {
  mqttClient.subscribe('led');
//  client.publish('presence', 'Hello mqtt');
});

mqttClient.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  ledVal = message.toString();
  mqttClient.end();
});
