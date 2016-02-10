var ArduinoFirmata = require('arduino-firmata');
var mqtt = require("mqtt");
var express = require('express');
var path = require("path");
var index = require("./routes/index");
var app = express();
var config = {
    PORT: 3000,
    mqtt:"mqtt://127.0.0.1",
    topic:"temp",
    view_engine: "ejs",
    path: {
        view: 'views',
        staticPath: 'public'
    },
    status: {
        __404: 404
    }
};
var temp = 0;
var board = new ArduinoFirmata().connect();
var mqttClient = mqtt.connect("mqtt://127.0.0.1");
mqttClient.on("connect",function(){
  mqttClient.subscribe(config.topic);
});
board.on("connect",function(){
  setInterval(function(){
    var tempC = Math.round((5.0 * board.analogRead(1) * 100.0) / 1024).toString();
    mqttClient.publish(config.topic,tempC);
    temp = tempC;
    setTimeout(function(){
      board.digitalWrite(13,false);
      board.servoWrite(9, 0);
    },1000);
    board.digitalWrite(13,true);
    board.servoWrite(9, Math.round(tempC));
  },5000);
});

app.set('views', path.join(__dirname, config.path.view));
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, config.path.staticPath)));
app.use("/",index);
app.get("/api/temp/current",function(req,res){
  res.send(temp);
});
app.use(function (req, res, next) {
    var err = new Error("Page Not Found");
    res.sendStatus(config.status.__404);
    next(err);
});
var server = app.listen(config.PORT, function () {
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
