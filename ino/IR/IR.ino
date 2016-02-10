#include <IRremote.h>
int pinIR = 10; //set D10 as input signal pin
int pinLed = 13;
IRrecv irrecv(pinIR);
decode_results signals;
void setup()
{
    pinMode(pinLed,OUTPUT);
    Serial.begin(9600);
    irrecv.enableIRIn(); // enable input from IR receiver
}
void loop() {
if (irrecv.decode(&signals)) {
        Serial.println(signals.value);
        switch(signals.value){
          case 16738455:
            digitalWrite(pinLed,LOW);
            break;
          case 16724175:
            digitalWrite(pinLed,HIGH);
            break;
          default:
            // digitalWrite(pinLed,LOW);
            break; 
          }
        irrecv.resume(); // get the next signal
    }
}

// 16724175 = 1
// 16738455 = 0


