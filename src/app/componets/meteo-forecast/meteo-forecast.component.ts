import { Component, OnInit } from '@angular/core';
import { HourlyForecast } from 'src/app/model/daily-forecast';
import { MeteoService } from 'src/app/services/meteo/meteo.service';

@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {

  forecastArray: HourlyForecast[] = []

  constructor(public meteoServ: MeteoService) { }

  ngOnInit(): void {
    const lat = '0';
    const lng = '0';
    this.meteoServ.getMeteo(lat, lng).subscribe({
      next: (data) => this.forecastArray = (data),
      error: (err) => console.log(err)
    })

  }



  }

