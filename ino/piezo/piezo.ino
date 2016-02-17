int pin9 = 9;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(pin9,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
//  for(int i=0; i < 100; i++){
//    digitalWrite(pin9,HIGH);
//    delayMicroseconds(500);
//    digitalWrite(pin9,LOW);
//    delayMicroseconds(500);
//  }
//  delay(5000);
  int volt = analogRead(pin9);
  Serial.println(volt);
  int thisPitch = map(220, 100, 1000, 120, 1500);
  //analogWrite(pin9,thisPitch);
  tone(pin9,thisPitch,2000);
  delay(5000);
  thisPitch = map(550, 100, 1000, 120, 1500);
  //analogWrite(pin9,thisPitch);
  tone(pin9,thisPitch,1000);
  delay(5000);
  //  analogWrite(pin9,1);
}
