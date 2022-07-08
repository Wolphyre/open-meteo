import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HourlyForecast } from 'src/app/componets/meteo-forecast/model/daily-forecast';
import { MeteoService } from 'src/app/services/meteo/meteo.service';

@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {

  forecastArray: HourlyForecast[] = []

  constructor(public meteoServ: MeteoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('latlng')){
      const latlng = this.route.snapshot.paramMap.get('latlng');
      const lat = latlng?.split('@')[0];
      const lng = latlng?.split('@')[1];
      this.meteoServ.getMeteo(lat!, lng!).subscribe({
        next: (data) => this.forecastArray = (data),
        error: (err) => console.log(err)
      })
  
    }

   
  }



  }

