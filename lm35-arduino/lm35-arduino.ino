#define TEMP_SENSOR 2
#define LED_RED 12
#define LED_GREEN 13
float signalVoltage, celsiusTemp;


void setup() {
  Serial.begin(9600);
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
}



void loop() {
    signalVoltage = analogRead(TEMP_SENSOR);
    celsiusTemp = (5 * signalVoltage * 100) / 1024;
    
    Serial.println(celsiusTemp);
   
  if(celsiusTemp >= 25) {
    digitalWrite(LED_GREEN, LOW);
    digitalWrite(LED_RED, HIGH);    
  } else {
    digitalWrite(LED_GREEN, HIGH);
    digitalWrite(LED_RED, LOW);
  }
 
  delay(2000); 
}
  
