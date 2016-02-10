
///////////////////////////////////
int DS_pin = 11;
int STCP_pin = 8;
int SHCP_pin = 12;

void setup()
{
pinMode(DS_pin,OUTPUT);
pinMode(STCP_pin,OUTPUT);
pinMode(SHCP_pin,OUTPUT);
writereg();
}

boolean registers[2];

void writereg()
{
  digitalWrite(STCP_pin, LOW);
  for (int i = 1; i >= 0; i--)
  {
    digitalWrite(SHCP_pin, LOW);
    digitalWrite(DS_pin, registers[i] );
    digitalWrite(SHCP_pin, HIGH);
  }
  digitalWrite(STCP_pin, HIGH);
}

void loop()
{
for(int i = 0; i <= 2; i++) { 
  registers[i] = HIGH; 
  delay(1000); 
  writereg(); 
} 
for(int i = 1; i >= 0; i--)
{
  registers[i] = LOW;
  delay(1000);
  writereg();
}
}
