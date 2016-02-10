// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;
int btn = 7;
int btnVal = 0;
// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);
  pinMode(btn,INPUT);
  
}

// the loop routine runs over and over again forever:
void loop() {
  btnVal = digitalRead(btn);
  if (btnVal == HIGH){
   digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  }else{
   digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  }
}
