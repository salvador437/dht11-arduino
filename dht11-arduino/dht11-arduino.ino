
#include <DHT11.h>

DHT11 dht11(4);

void setup() {
    Serial.begin(9600);
}
int temperature = 0;
    int humidity = 0;
void loop() {
    

    int result = dht11.readTemperatureHumidity(temperature, humidity);

    if (result == 0) {
        //Serial.print("T");
        Serial.print(temperature);
        //Serial.print("H");
        Serial.println(humidity);
    } 
    delay(100);
}
