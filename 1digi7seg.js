var arduinofirmata = require('arduino-firmata');
var board = new arduinofirmata().connect();

var pinA  = 9;
var pinB  = 8;
var pinC  = 3;
var pinD  = 5;
var pinE  = 4;
var pinF  = 10;
var pinG  = 11;
var pinDP  = 2;

var zero = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,true);
  board.digitalWrite(pinE,true);
  board.digitalWrite(pinF,true);
  board.digitalWrite(pinG,false);
  board.digitalWrite(pinDP,false);
};
var one = function(){
  board.digitalWrite(pinA,false);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,false);
  board.digitalWrite(pinE,false);
  board.digitalWrite(pinF,false);
  board.digitalWrite(pinG,false);
  board.digitalWrite(pinDP,false);
};
var two = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,false);
  board.digitalWrite(pinD,true);
  board.digitalWrite(pinE,true);
  board.digitalWrite(pinF,false);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,false);
};
var three = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,true);
  board.digitalWrite(pinE,false);
  board.digitalWrite(pinF,false);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,false);
};
var four = function(){
  board.digitalWrite(pinA,false);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,false);
  board.digitalWrite(pinE,false);
  board.digitalWrite(pinF,true);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,false);
};
var five = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,false);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,true);
  board.digitalWrite(pinE,false);
  board.digitalWrite(pinF,true);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,false);
};
var six = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,false);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,true);
  board.digitalWrite(pinE,true);
  board.digitalWrite(pinF,true);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,false);
};
var seven = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,false);
  board.digitalWrite(pinE,false);
  board.digitalWrite(pinF,false);
  board.digitalWrite(pinG,false);
  board.digitalWrite(pinDP,false);
};
var eight = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,true);
  board.digitalWrite(pinE,true);
  board.digitalWrite(pinF,true);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,true);
};
var nine = function(){
  board.digitalWrite(pinA,true);
  board.digitalWrite(pinB,true);
  board.digitalWrite(pinC,true);
  board.digitalWrite(pinD,false);
  board.digitalWrite(pinE,false);
  board.digitalWrite(pinF,true);
  board.digitalWrite(pinG,true);
  board.digitalWrite(pinDP,false);
};

board.on("connect",function(){
  console.log("Board connected");
  var digits = [zero,one,two,three,four,five,six,seven,eight,nine];
  var i = 0;
  setInterval(function(){
    console.log("digit = " + i);
    console.log(digits[i]());
    i++;
    if (i > digits.length -1){
        board.analogWrite(6,220);
        setTimeout(function(){
          board.analogWrite(6,0);
        },500);
       i = 0;
    }
  },1000);
});
