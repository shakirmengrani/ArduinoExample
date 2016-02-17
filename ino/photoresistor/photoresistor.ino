// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int lightPin = A1;
int ledPin = 9;

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.
  pinMode(ledPin, OUTPUT);  
}

// the loop routine runs over and over again forever:
void loop() {
  int volt = analogRead(lightPin) + 90;
  if (analogRead(lightPin) > 50){
    volt = analogRead(lightPin) / 1023;
  }
//  Serial.println(analogRead(lightPin)); //Write the value of the photoresistor to the serial monitor.
  analogWrite(ledPin, volt);  //send the value to the ledPin. Depending on value of resistor 
                                                //you have  to divide the value. for example, 
                                                //with a 10k resistor divide the value by 2, for 100k resistor divide by 4.
   delay(10); //short delay for faster response to light.
}
