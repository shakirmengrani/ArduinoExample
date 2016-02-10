#include <Servo.h>
Servo myservo;
int pin = 9;


void setup() {
  // put your setup code here, to run once:
  myservo.attach(pin);
}

void loop() {
  for(int i = 10; i <= 180; i++){
      myservo.write(i);
      delay(88);      
    }
  for(int i = 180; i >= 0; i--){
      myservo.write(i);
      delay(88);      
    }
}
