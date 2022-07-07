import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HourlyForecast } from 'src/app/model/daily-forecast';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast?latitude=41.8955&longitude=12.4823&hourly=temperature_2m,relativehumidity_2m,pressure_msl,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin'

  constructor(private http: HttpClient) { }

  getDatas() {
    return this.http.get<HourlyForecast[]>(this.BASE_URL).pipe(
      map(data => this.parseMeteoData(data))
    );
  }

  parseMeteoData(data: any) {
    const temperatureArray = data.hourly.temperature_2m;
    const timeArray = data.hourly.time;
    const humidityArray = data.hourly.relativehumidity_2m;
    const pressureArray = data.hourly.pressure_msl;
    const rainArray = data.hourly.rain;
    const codeArray = data.hourly.weathercode;
    const cloudCoverArray = data.hourly.cloudcover;
    const windSArray = data.hourly.windspeed_10m;
    const windDArray = data.hourly.winddirection_10m;    
   

    let datasArray:HourlyForecast[] = [];

    for (let i = 0; i < temperatureArray.length; i++) {
      const temperature = temperatureArray[i];
      const time = timeArray[i];
      const humidity = humidityArray[i];
      const pressure = pressureArray[i];
      const rain = rainArray[i];
      const code = codeArray[i];
      const cloudCover = cloudCoverArray[i];
      const windSpeed = windSArray[i];
      const windDirection = windDArray[i];

      const forecast: HourlyForecast = {date: time, temperature: temperature, 
        humidity: humidity, pressure: pressure,
        rain: rain, code: code, cloudCover: cloudCover,
        windSpeed: windSpeed, windDirection: windDirection
       };

      datasArray.push(forecast)
      
    }
    return datasArray;

    // return data.hourly.time.map((time:string, index:number)=> (
    //   return (data: time, temperature: data.hourly.temperature_2m(index))
    // )) 
  }

}
